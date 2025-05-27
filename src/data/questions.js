export const questions = [
    {
        key: "academic_strength",
        question: "How would you describe your academic ability?",
        options: [
            { label: "📈 I'm in the top of my class", value: 3 },   // → map to SAT/ACT high
            { label: "😌 Above average", value: 2 },                // → map to mid
            { label: "🙂 Average", value: 1 },                      // → map to avg
            { label: "🤷 I’d rather not say", value: 0 },           // → fill in avg default
        ],
    },
    {
        key: "cost_sensitivity",
        question: "How sensitive are you to the cost of college?",
        options: [
            { label: "💸 I need it to be affordable", value: 3 },   // → prioritize low net_price
            { label: "💰 I'd like to keep cost low, but I’m flexible", value: 2 },
            { label: "🤑 I’m not too worried about cost", value: 1 },
        ],
    },
    {
        key: "school_size",
        question: "What size school are you looking for?",
        options: [
            { label: "👨‍👩‍👧‍👦 Small (<5,000 students)", value: "small" },     // → <5000
            { label: "🏙️ Medium (5,000–15,000)", value: "medium" },           // → 5k–15k
            { label: "🎓 Large (15,000+)", value: "large" },                   // → >15000
            { label: "🤷 No preference", value: "any" },
        ],
    },
    {
        key: "preferred_environment",
        question: "What type of environment do you prefer?",
        options: [
            { label: "🌆 Urban (in a city)", value: "City" },
            { label: "🏡 Suburban (near a city)", value: "Suburb" },
            { label: "🌲 Rural (small town or countryside)", value: "Rural" },
            { label: "🤷 No preference", value: "any" },
        ],
    },
    {
        key: "graduation_importance",
        question: "How important is it that most students graduate on time?",
        options: [
            { label: "✅ Very important", value: 3 },  // → prioritize grad_rate
            { label: "🙂 Somewhat important", value: 2 },
            { label: "😐 Not a big deal", value: 1 },
        ],
    },
    {
        key: "selectivity",
        question: "How selective should the college be?",
        options: [
            { label: "🎯 Very selective", value: "low_admission_rate" },
            { label: "🎓 Open admission is fine", value: "high_admission_rate" },
            { label: "🤷 I don’t care", value: "any" },
        ],
    },
    {
        key: "location_importance",
        question: "How far from home are you willing to go?",
        options: [
            { label: "📍 Close to home", value: "close" },        // → filter by distance using lat/lon
            { label: "🚗 Within a few hours", value: "regional" },
            { label: "🌎 Anywhere in the country", value: "any" },
        ],
    }
];
