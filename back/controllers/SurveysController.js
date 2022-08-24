import { Question } from '../models/Question.js';
import { QuestionType } from '../models/QuestionType.js';
import { Survey } from '../models/Survey.js';
import { OptionsDB } from '../models/Option.js';

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
        const survey = await Survey.findOne({
            where: {
                id: Number(req.params.id)
            }
        })
        
        if(!survey){
            res.status(404).json({
                status: 'error',
                message: 'Survey not found'
            })
        }

        const questions = await Question.findAll({
            where: {
                SurveyId: survey.id
            },
            attributes: ['question', 'id'],
            include: [{
                model: QuestionType,
                attributes: ['type', 'name', 'id']
            }]
        })

        const questionsWithOptions = await Promise.all(questions.map(async (e)=> {

            const options = await OptionsDB.findAll({
                where: {
                    QuestionId: e.getDataValue("id")
                },
            })

           const question = e.get({ plain: true });
           const response = {
            ...question,
            options
           }

            return response
        }))

        const response = {
            survey: survey,
            questions: questionsWithOptions
        }
        
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

        const SurveyId = newSurvey.getDataValue('id')

        surveyRequest.questions.forEach(async (q) => {
            const newQuestion = Question.build({
                question: q.question,
                QuestionTypeId: q.questionType,
                SurveyId: SurveyId
            })
            await newQuestion.save()
            
            const newQuestionId = newQuestion.getDataValue('id')
            
            q.options.forEach(async (o)=> {
                const newOption = OptionsDB.build({
                    options: o.option,
                    QuestionId: newQuestionId
                })
        
                await newOption.save()
            })
        })

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