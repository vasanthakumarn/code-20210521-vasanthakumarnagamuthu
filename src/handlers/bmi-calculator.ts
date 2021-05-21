import {IPersonBMIData} from "../models/models";
import {BmiCalculatorService} from "../services/bmi-calculator-service";

export class BmiCalculator {
    constructor(public bmiCalculatorService: BmiCalculatorService) {
    }

    startProcessingData(personBMIData: IPersonBMIData[]): IPersonBMIData[] {
        return this.bmiCalculatorService.calculatBMIAndCategoryAndHealthRish(personBMIData);
    }
}


