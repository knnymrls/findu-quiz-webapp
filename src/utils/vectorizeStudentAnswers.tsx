type StudentAnswers = {
    academic_strength: number; // 0–3
    cost_sensitivity: number;  // 1–3
    school_size: "small" | "medium" | "large" | "any";
    preferred_environment: "urban" | "suburban" | "rural" | "any";
    graduation_importance: number; // 1–3
    selectivity: "low_admission_rate" | "high_admission_rate" | "any";
    location_importance: "close" | "regional" | "any"; // not used directly
};

export function vectorizeStudentAnswers(
    answers: StudentAnswers,
    encoder: any // OneHotEncoder from sklearn-like Python backend or pre-fit JS encoder
): number[] {
    // === Estimate academic scores ===
    const sat_reading = [450, 550, 650, 750][answers.academic_strength]; // Out of 800
    const sat_math = sat_reading;
    const act_composite = [17, 21, 26, 32][answers.academic_strength]; // Out of 36

    // === Estimate affordability thresholds ===
    const cost_scale = [40000, 30000, 20000, 15000][answers.cost_sensitivity]; // Out of 80k
    const tuition_in = cost_scale * 0.4;
    const tuition_out = cost_scale * 0.6;
    const net_price = cost_scale * 0.6;

    // === Size estimate ===
    const size_map: Record<string, number> = {
        small: 3000,
        medium: 10000,
        large: 25000,
        any: 15000,
    };

    // === Selectivity estimate (admission rate) ===
    const admission_rate_map: Record<string, number> = {
        low_admission_rate: 0.25,
        high_admission_rate: 0.85,
        any: 0.5,
    };

    // === Graduation rate weighting ===
    const graduation_rate = [0.5, 0.6, 0.7, 0.8][answers.graduation_importance];

    // === Environment (locale_desc) one-hot encoding ===
    const locale_onehot = {
        "urban": [1, 0, 0],
        "suburban": [0, 1, 0],
        "rural": [0, 0, 1],
        "any": [0, 0, 0],
    };

    const numericVector = [
        admission_rate_map[answers.selectivity],          // admission_rate
        sat_reading / 800,
        sat_math / 800,
        act_composite / 36,
        graduation_rate,
        cost_scale / 80000,                               // cost_of_attendance
        net_price / 80000,
        tuition_in / 80000,
        tuition_out / 80000,
        size_map[answers.school_size] / 100000,
        0.5, 0.5, // Neutral for lat/lon if not used
    ];

    // === You can replace this with real one-hot encoding if needed ===
    const categoricalVector = locale_onehot[answers.preferred_environment] || [0, 0, 0];

    return [...numericVector, ...categoricalVector];
}
