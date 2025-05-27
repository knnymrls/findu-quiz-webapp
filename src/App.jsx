"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
import { colleges } from "./data/colleges"
import { questions } from "./data/questions"
import QuizQuestion from "./components/QuizQuestion"
import QuizResult from "./components/QuizResult"

export default function App() {
    const [step, setStep] = useState(0)
    const [answers, setAnswers] = useState({})
    const [selected, setSelected] = useState(null)
    const current = questions[step]

    const handleContinue = () => {
        if (selected === null) return
        const answer = current.type === 'slider'
            ? { value: selected }
            : current.options[selected]
        setAnswers((prev) => ({ ...prev, [current.key]: answer.value }))
        setSelected(null)
        setStep((prev) => prev + 1)
    }

    if (step >= questions.length) {
        const scores = colleges.map((college) => {
            let score = 0;
            let totalWeight = 0;
            
            Object.entries(answers).forEach(([key, value]) => {
                const weight = college.match_weights[key] || 1.0;
                totalWeight += weight;
                
                if (key === 'academic_strength') {
                    if (college.academic_strength >= value) {
                        score += weight;
                    } else {
                        score += weight * (college.academic_strength / value);
                    }
                } else if (key === 'campus_type') {
                    if (college[key] === value) {
                        score += weight;
                    }
                } else if (key === 'career_focus') {
                    if (college[key] === value) {
                        score += weight;
                    }
                }
            });

            const normalizedScore = (score / totalWeight) * 100;
            
            return { 
                ...college, 
                score: Math.round(normalizedScore),
                matchDetails: {
                    academicMatch: college.academic_strength >= answers.academic_strength ? "Meets your academic level" : "More selective than your preference",
                    campusMatch: college.campus_type === answers.campus_type ? "Matches your preferred campus type" : "Different campus environment",
                    careerMatch: college.career_focus === answers.career_focus ? "Aligns with your educational approach" : "Different educational focus"
                }
            };
        });

        // Sort by score and get top 3 matches
        const topMatches = scores
            .sort((a, b) => b.score - a.score)
            .slice(0, 3);

        const bestMatch = topMatches[0];

        return (
            <div className="min-h-screen bg-surface dark:bg-surface-dark relative">
                <Navbar />
                <div className="flex items-center justify-center min-h-screen p-6">
                    <QuizResult bestMatch={bestMatch} onRetake={() => { setStep(0); setAnswers({}); setSelected(null); }} />
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-surface dark:bg-surface-dark relative">
            <Navbar />
            <div className="flex items-center justify-center min-h-screen p-6">
                <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                        <div className="text-lg font-medium text-secondary dark:text-secondary-dark mb-1 font-sans">Question {step + 1} of {questions.length}</div>
                        <div className="text-2xl font-bold mb-4 font-sans text-onSurface dark:text-onSurface-dark">{current.question}</div>
                    </div>
                    <QuizQuestion question={current} selected={selected} setSelected={setSelected} />
                    <button
                        onClick={handleContinue}
                        disabled={selected === null}
                        className={`w-full py-3 rounded-xl font-semibold transition text-lg
                            ${selected !== null 
                                ? "bg-onSurface font-sans dark:bg-onSurface-dark text-surface dark:text-surface-dark" 
                                : "bg-gray-200 font-sans dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"}
                        `}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}
