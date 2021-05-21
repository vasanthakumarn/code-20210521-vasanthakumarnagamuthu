export interface IPersonBMIData {
    Gender: string;
    HeightCm: number;
    WeightKg: number;
    BMI?: number;
    BMICategory?: string;
    HealthRisk?: string;
}
export interface IBMICategory {
    bmiValue: number;
    name: string;
    healthRisk: string;
}
