import {describe} from "mocha";
import {expect} from 'chai';
import * as td from 'testdouble';
import {BmiCalculator} from "../../src/handlers/bmi-calculator";
import {BmiCalculatorService} from "../../src/services/bmi-calculator-service";
import {IPersonBMIData} from "../../src/models/models";

describe('BmiCalculator', () => {
    const mockBMICalculatorService: BmiCalculatorService = td.object(BmiCalculatorService.prototype);
    const bmiCalculator: BmiCalculator = new BmiCalculator(mockBMICalculatorService);
   it('should call the BMICalculator service and get processed values', () => {
       const bmiDataCaptor = td.matchers.captor();
       const personBMIData: IPersonBMIData[] = [{ "Gender": "Male", "HeightCm": 171, "WeightKg": 96 }];
       const expectedBMIData: IPersonBMIData[] = [
           {
               Gender: 'Male',
               HeightCm: 171,
               WeightKg: 96,
               BMI: 33,
               BMICategory: 'Moderately obese',
               HealthRisk: 'Medium risk'
           }]
       td.when(mockBMICalculatorService.calculatBMIAndCategoryAndHealthRish(bmiDataCaptor.capture())).thenReturn(expectedBMIData);
       const processedBMIData = bmiCalculator.startProcessingData(personBMIData);
       td.verify(mockBMICalculatorService.calculatBMIAndCategoryAndHealthRish(personBMIData), {times:1})
       expect(bmiDataCaptor.value).to.deep.equal(personBMIData);
       expect(processedBMIData).to.deep.equal(expectedBMIData);
   });
});
