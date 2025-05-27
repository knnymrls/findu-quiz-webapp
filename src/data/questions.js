export const questions = [
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
    },
    {
        key: "extracurriculars",
        question: "Are you interested in joining clubs or sports?",
        options: [
            { label: "Yes, I want lots of options!", value: "many" },
            { label: "A few would be nice", value: "some" },
            { label: "Not really my thing", value: "none" },
        ],
    },
    // Example of a branching/conditional question (pseudo, for future logic)
    // {
    //   key: "arts_interest",
    //   question: "Do you want strong arts programs?",
    //   options: [
    //     { label: "Yes", value: true },
    //     { label: "No", value: false },
    //   ],
    //   showIf: (answers) => answers.career_focus === false,
    // },
]; 