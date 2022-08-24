import express from "express";
import cors from "cors";
import SurveysController from './controllers/SurveysController.js'
import QuestionTypesController from './controllers/QuestionTypesController.js'

export const startServer = (conn) => {

    const app = express();

    app.use(express.json());

    app.use(cors());

    app.get('/status', (req, res) => {
        res.json({
            status: true
        });
    });

    app.get('/', (req, res) => {
        res.json({
            status: true
        });
    });

    app.get('/surveys', SurveysController.getAll)
    app.get('/surveys/:id', SurveysController.getOne)
    app.post('/surveys', SurveysController.store)

    app.get('/questionTypes', QuestionTypesController.getAll)


    app.listen(process.env.PORT, () => {
        console.log(`⚡️[server]: Server is running at https://localhost:${process.env.PORT}`);
    })

}