import {IBMICategory} from "../models/models";

const bmiCatetory: IBMICategory[] = [
    {bmiValue: 18.4, name: 'Under weight', healthRisk: 'Malnutrition risk'},
    {bmiValue: 24.9, name: 'Normal weight', healthRisk: 'Low risk'},
    {bmiValue: 29.9, name: 'Over weight', healthRisk: 'Enhanced risk'},
    {bmiValue: 34.9, name: 'Moderately obese', healthRisk: 'Medium risk'},
    {bmiValue: 39.9, name: 'Severely obese', healthRisk: 'High risk'},
    {bmiValue:40, name: 'Very severely obese', healthRisk: 'Very high risk'}
];

export {bmiCatetory};
