import express from 'express';
import {BmiCalculator} from "./handlers/bmi-calculator";
import {BmiCalculatorService} from "./services/bmi-calculator-service";
import {IPersonBMIData} from "./models/models";
import {personBMIData} from "./data/person-data";
const server = express();
const port = 3000;

let bmiCalculator: BmiCalculator;
let processedBMIData: IPersonBMIData[];

server.get('/', (req, res) => {
    bmiCalculator = new BmiCalculator(new BmiCalculatorService());
    processedBMIData = bmiCalculator.startProcessingData(personBMIData);
    res.send({statusCode: 200, bmiData: processedBMIData});
});

module.exports = server.listen(port, () => {
});
