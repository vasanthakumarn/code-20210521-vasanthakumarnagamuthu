import express from 'express';
import {BmiCalculator} from "./handlers/bmi-calculator";
import {BmiCalculatorService} from "./services/bmi-calculator-service";
import {IPersonBMIData} from "./models/models";
import {personBMIData} from "./data/person-data";
const server = express();

let bmiCalculator: BmiCalculator;
let processedBMIData: IPersonBMIData[];

server.get('/', (req, res) => {
    bmiCalculator = new BmiCalculator(new BmiCalculatorService());
    processedBMIData = bmiCalculator.startProcessingData(personBMIData);
    console.log(processedBMIData);
    res.send({statusCode: 200, bmiData: processedBMIData});
});

module.exports = server.listen(process.env.PORT || 3000, () => {
    console.log('Server started running in ');
});
