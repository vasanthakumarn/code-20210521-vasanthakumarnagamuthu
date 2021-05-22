import {IPersonBMIData} from "../models/models";
import {bmiCatetory} from "../data/bmi-category";

export class BmiCalculatorService {

    calculatBMIAndCategoryAndHealthRish(personBMIData: IPersonBMIData[]): IPersonBMIData[] {
        console.log('Total BMI Data Count ', personBMIData.length, '- BMI Processing Started @ >>'+new Date());
        personBMIData.map((data: IPersonBMIData) => {
            data.BMI = this.findBMI(data);
             let categoryBucket = this.findBMICategoryBucket(data.BMI);
             data.BMICategory = bmiCatetory[categoryBucket].name;
             data.HealthRisk = bmiCatetory[categoryBucket].healthRisk;
        });
        console.log('Total BMI Data Count ', personBMIData.length, '- BMI Processing Completed @ >>'+new Date());
        return personBMIData;
    }

    private findBMI(data: IPersonBMIData): number {
        return Math.round(data.WeightKg / Math.pow(data.HeightCm / 100, 2));
    }

    private findBMICategoryBucket(bmi: number): number {
        let count = 0;
        let bucket = -1;
        while (count < bmiCatetory.length-1) {
            if (bmi < bmiCatetory[count].bmiValue) {
                bucket = count;
                break;
            } else
            count++;
        }
        bucket === -1? bucket = count: bucket = bucket;
        return bucket;
    }
}
