import { QuestionType } from '../models/QuestionType.js';

const getAll = async (req, res, next) => {
    try {
        const questionTypes = await QuestionType.findAll();

        res.json(questionTypes);
    } catch (error) {
        next(error);
    }
}

const getOne = async (req, res, next) => {
    try {
        const questionType = await QuestionType.findOne({
            where: {
                id: Number(req.params.id)
            }
        })
        res.json(questionType)
    } catch (error) {
        next(error)
    }
}

export default{
    getAll,
    getOne
}