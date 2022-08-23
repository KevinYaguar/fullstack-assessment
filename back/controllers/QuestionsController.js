import { Question } from '../models/Question.js';

const getAll = async (req, res, next) => {
    try {
        const questions = await Question.findAll();

        res.json(questions);
    } catch (error) {
        next(error);
    }
}

const getOne = async (req, res, next) => {
    try {
        const question = await Question.findOne({
            where: {
                id: Number(req.params.id)
            }
        })
        res.json(question)
    } catch (error) {
        next(error)
    }
}

export default{
    getAll,
    getOne
}