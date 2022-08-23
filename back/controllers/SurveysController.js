import { Survey } from '../models/Survey.js';

const getAll = async (req, res, next) => {
    try {
        const response = await Survey.findAll();

        res.json(response);
    } catch (error) {
        next(error);
    }
}

const getOne = async (req, res, next) => {
    try {
        const response = await Survey.findOne({
            where: {
                id: Number(req.params.id)
            }
        })
        
        res.json(response)
    } catch (error) {
        next(error)
    }
}

const store = async(req, res, next) => {
    const surveyRequest = req.body;

    try {
        const newSurvey = Survey.build({
            title: surveyRequest.title,
            description: surveyRequest.description
        });
        await newSurvey.save();

        const response = {
            id: newSurvey.getDataValue('id')
        }
        res.json(response);
    } catch (error) {
        next(error);
    }
}

export default {
    getAll,
    getOne,
    store
}