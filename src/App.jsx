"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
const colleges = [
    {
        name: "Northwestern University",
        academic_strength: 3,
        campus_type: "urban",
        career_focus: true,
        size: "medium",
        location: "Evanston, IL",
        description: "A leading research university with strong programs in journalism, engineering, and performing arts.",
        match_weights: {
            academic_strength: 1.5,
            campus_type: 1.0,
            career_focus: 1.2
        }
    },
    {
        name: "University of Nebraska",
        academic_strength: 2,
        campus_type: "suburban",
        career_focus: false,
        size: "large",
        location: "Lincoln, NE",
        description: "A comprehensive public university known for agriculture, business, and engineering programs.",
        match_weights: {
            academic_strength: 1.0,
            campus_type: 1.0,
            career_focus: 0.8
        }
    },
    {
        name: "University of California, Berkeley",
        academic_strength: 3,
        campus_type: "urban",
        career_focus: true,
        size: "large",
        location: "Berkeley, CA",
        description: "A world-renowned public university with strengths in STEM, business, and social sciences.",
        match_weights: {
            academic_strength: 1.8,
            campus_type: 1.2,
            career_focus: 1.5
        }
    },
    {
        name: "University of Virginia",
        academic_strength: 3,
        campus_type: "suburban",
        career_focus: true,
        size: "large",
        location: "Charlottesville, VA",
        description: "A prestigious public university with a historic campus and strong liberal arts tradition.",
        match_weights: {
            academic_strength: 1.5,
            campus_type: 1.0,
            career_focus: 1.2
        }
    },
    {
        name: "Boston University",
        academic_strength: 3,
        campus_type: "urban",
        career_focus: true,
        size: "large",
        location: "Boston, MA",
        description: "A dynamic urban university known for communications, business, and health sciences.",
        match_weights: {
            academic_strength: 1.4,
            campus_type: 1.2,
            career_focus: 1.3
        }
    },
    {
        name: "University of Wisconsin-Madison",
        academic_strength: 2,
        campus_type: "urban",
        career_focus: false,
        size: "large",
        location: "Madison, WI",
        description: "A vibrant public university with strong research programs and school spirit.",
        match_weights: {
            academic_strength: 1.2,
            campus_type: 1.0,
            career_focus: 0.9
        }
    },
    {
        name: "Vanderbilt University",
        academic_strength: 3,
        campus_type: "urban",
        career_focus: true,
        size: "medium",
        location: "Nashville, TN",
        description: "A prestigious private university with strengths in medicine, law, and music.",
        match_weights: {
            academic_strength: 1.6,
            campus_type: 1.1,
            career_focus: 1.3
        }
    },
    {
        name: "University of Washington",
        academic_strength: 2,
        campus_type: "urban",
        career_focus: true,
        size: "large",
        location: "Seattle, WA",
        description: "A leading public research university with strong programs in computer science and medicine.",
        match_weights: {
            academic_strength: 1.3,
            campus_type: 1.2,
            career_focus: 1.4
        }
    },
    {
        name: "Duke University",
        academic_strength: 3,
        campus_type: "suburban",
        career_focus: true,
        size: "medium",
        location: "Durham, NC",
        description: "A prestigious private university known for medicine, law, and business.",
        match_weights: {
            academic_strength: 1.7,
            campus_type: 1.0,
            career_focus: 1.4
        }
    },
    {
        name: "University of Florida",
        academic_strength: 2,
        campus_type: "suburban",
        career_focus: true,
        size: "large",
        location: "Gainesville, FL",
        description: "A comprehensive public university with strong athletics and research programs.",
        match_weights: {
            academic_strength: 1.2,
            campus_type: 1.0,
            career_focus: 1.2
        }
    },
    {
        name: "Carnegie Mellon University",
        academic_strength: 3,
        campus_type: "urban",
        career_focus: true,
        size: "medium",
        location: "Pittsburgh, PA",
        description: "A leading technology university with strengths in computer science and engineering.",
        match_weights: {
            academic_strength: 1.6,
            campus_type: 1.1,
            career_focus: 1.5
        }
    },
    {
        name: "University of North Carolina at Chapel Hill",
        academic_strength: 3,
        campus_type: "suburban",
        career_focus: false,
        size: "large",
        location: "Chapel Hill, NC",
        description: "A prestigious public university with strong liberal arts and medical programs.",
        match_weights: {
            academic_strength: 1.5,
            campus_type: 1.0,
            career_focus: 0.9
        }
    },
    {
        name: "Rice University",
        academic_strength: 3,
        campus_type: "urban",
        career_focus: true,
        size: "small",
        location: "Houston, TX",
        description: "A selective private university known for engineering and natural sciences.",
        match_weights: {
            academic_strength: 1.7,
            campus_type: 1.1,
            career_focus: 1.3
        }
    },
    {
        name: "University of Texas at Austin",
        academic_strength: 2,
        campus_type: "urban",
        career_focus: true,
        size: "large",
        location: "Austin, TX",
        description: "A vibrant public university known for business, engineering, and its unique Austin culture.",
        match_weights: {
            academic_strength: 1.3,
            campus_type: 1.2,
            career_focus: 1.2
        }
    },
    {
        name: "University of Illinois Urbana-Champaign",
        academic_strength: 2,
        campus_type: "suburban",
        career_focus: true,
        size: "large",
        location: "Champaign, IL",
        description: "A leading public university with strong programs in engineering and computer science.",
        match_weights: {
            academic_strength: 1.3,
            campus_type: 1.0,
            career_focus: 1.3
        }
    }
]

const questions = [
    {
        key: "academic_strength",
        question: "What are your grades like?",
        options: [
            { label: "📈 Straight A's (3.8+ GPA)", value: 3 },
            { label: "😌 Mostly A's and B's (3.0-3.7 GPA)", value: 2 },
            { label: "😅 Mix of B's and C's (2.0-2.9 GPA)", value: 1 },
            { label: "📚 Still figuring it out", value: 0 },
        ],
    },
    {
        key: "campus_type",
        question: "What kind of campus vibe do you want?",
        options: [
            { label: "🌆 Urban - In the heart of the city", value: "urban" },
            { label: "🌲 Rural - Surrounded by nature", value: "rural" },
            { label: "🏡 Suburban - Best of both worlds", value: "suburban" },
        ],
    },
    {
        key: "career_focus",
        question: "What's your approach to education?",
        options: [
            { label: "💼 Career-focused - I want strong job prospects", value: true },
            { label: "🎓 Liberal arts - I want to explore different fields", value: false },
        ],
    }
]

export default function App() {
    const [step, setStep] = useState(0)
    const [answers, setAnswers] = useState({})
    const [selected, setSelected] = useState(null)
    const current = questions[step]

    const handleContinue = () => {
        if (selected === null) return
        const answer = current.options[selected]
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
                    <div className="w-full max-w-md text-center">
                        {/* College Card */}
                        <div className="mb-8 bg-surfaceContain dark:bg-surfaceContain-dark rounded-2xl p-6 border border-border dark:border-border-dark">
                            <div className="text-4xl mb-4 text-onSurface dark:text-onSurface-dark">🎓</div>
                            <div className="text-2xl font-semibold mb-2 text-onSurface dark:text-onSurface-dark">{bestMatch.name}</div>
                            <div className="text-sm text-secondary dark:text-secondary-dark mb-4">{bestMatch.location}</div>
                            
                            {/* Description */}
                            <div className="text-sm text-secondary dark:text-secondary-dark mb-6">
                                {bestMatch.description}
                            </div>

                            {/* Quick Facts */}
                            <div className="flex flex-wrap gap-3 justify-center">
                                <div className="px-3 py-1.5 rounded-full bg-surfaceContain dark:bg-surfaceContain-dark border border-border dark:border-border-dark text-onSurface dark:text-onSurface-dark text-sm">
                                    {bestMatch.size} campus
                                </div>
                                <div className="px-3 py-1.5 rounded-full bg-surfaceContain dark:bg-surfaceContain-dark border border-border dark:border-border-dark text-onSurface dark:text-onSurface-dark text-sm">
                                    {bestMatch.campus_type} setting
                                </div>
                                <div className="px-3 py-1.5 rounded-full bg-surfaceContain dark:bg-surfaceContain-dark border border-border dark:border-border-dark text-onSurface dark:text-onSurface-dark text-sm">
                                    {bestMatch.career_focus ? "Career focused" : "Liberal arts"}
                                </div>
                            </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-row flex-wrap gap-3 justify-center">
                            <button
                                onClick={() => {
                                    navigator.share({
                                        title: 'FindU College Quiz',
                                        text: `I found my college match on FindU! My best match was ${bestMatch.name}. Take the quiz to find yours!`,
                                        url: window.location.href
                                    }).catch(() => {
                                        navigator.clipboard.writeText(window.location.href);
                                        alert('Link copied to clipboard!');
                                    });
                                }}
                                className="px-6 py-3 rounded-full bg-surfaceContain dark:bg-surfaceContain-dark border border-border dark:border-border-dark text-onSurface dark:text-onSurface-dark font-semibold shadow transition text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                                Share Results
                            </button>
                            
                            <button
                                onClick={() => {
                                    window.open('https://findu.app/download', '_blank');
                                }}
                                className="px-6 py-3 rounded-full bg-onSurface dark:bg-onSurface-dark text-surface dark:text-surface-dark font-semibold shadow transition text-sm hover:bg-gray-900"
                            >
                                Download App
                            </button>

                            <button
                                onClick={() => {
                                    setStep(0)
                                    setAnswers({})
                                    setSelected(null)
                                }}
                                className="px-6 py-3 rounded-full text-secondary dark:text-secondary-dark font-medium transition text-sm hover:text-onSurface dark:hover:text-onSurface-dark"
                            >
                                Take Quiz Again
                            </button>
                        </div>
                    </div>
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
                    <div className="flex flex-col gap-4 mb-6">
                        {current.options.map((opt, i) => (
                            <button
                                key={i}
                                onClick={() => setSelected(i)}
                                className={`w-full py-4 px-4 hover:scale-105 rounded-2xl  font-medium transition text-left flex items-center gap-2
                                    ${selected === i 
                                        ? "bg-primary/20 border font-sans border-primary text-primary " 
                                        : "text-onSurface font-sans border bg-surfaceContain dark:bg-surfaceContain-dark border-border dark:border-border-dark dark:text-onSurface-dark"}
                                `}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
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
