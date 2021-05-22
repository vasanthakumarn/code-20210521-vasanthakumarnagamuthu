import {describe} from 'mocha';
import {expect} from 'chai';
import {BmiCalculatorService} from "../../src/services/bmi-calculator-service";
import {IPersonBMIData} from "../../src/models/models";

describe('BmiCalculatorService', () => {
    const personBMIData: IPersonBMIData[] = [
        { "Gender": "Male", "HeightCm": 171, "WeightKg": 96 },
        { "Gender": "Male", "HeightCm": 16, "WeightKg": 85 },
        { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 },
        { "Gender": "Female", "HeightCm": 266, "WeightKg": 62 },
        { "Gender": "Female", "HeightCm": 150, "WeightKg": 81 },
        { "Gender": "Female", "HeightCm": 167, "WeightKg": 82 },
    ];
    const expectedBMIData: IPersonBMIData[] = [
        {
            Gender: 'Male',
            HeightCm: 171,
            WeightKg: 96,
            BMI: 33,
            BMICategory: 'Moderately obese',
            HealthRisk: 'Medium risk'
        },
        {
            Gender: 'Male',
            HeightCm: 16,
            WeightKg: 85,
            BMI: 3320,
            BMICategory: 'Very severely obese',
            HealthRisk: 'Very high risk'
        },
        {
            Gender: 'Male',
            HeightCm: 180,
            WeightKg: 77,
            BMI: 24,
            BMICategory: 'Normal weight',
            HealthRisk: 'Low risk'
        },
        {
            Gender: 'Female',
            HeightCm: 266,
            WeightKg: 62,
            BMI: 9,
            BMICategory: 'Under weight',
            HealthRisk: 'Malnutrition risk'
        },
        {
            Gender: 'Female',
            HeightCm: 150,
            WeightKg: 81,
            BMI: 36,
            BMICategory: 'Severely obese',
            HealthRisk: 'High risk'
        },
        {
            Gender: 'Female',
            HeightCm: 167,
            WeightKg: 82,
            BMI: 29,
            BMICategory: 'Over weight',
            HealthRisk: 'Enhanced risk'
        }
    ];
    const bmiCalculatorService = new BmiCalculatorService();
    it('should calculate bmi, category and risk and update the data', () => {
        const processedBMIData: IPersonBMIData[] = bmiCalculatorService.calculatBMIAndCategoryAndHealthRish(personBMIData);
        expect(processedBMIData).to.deep.equal(expectedBMIData);
    });
});
