import { Sequelize, DataTypes, Model } from 'sequelize';
import { QuestionType } from './QuestionType.js';
import { Survey } from './Survey.js';

export class Question extends Model {}

export const init = (sequelize) => {
    Question.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'ID'
        },
        Question: {
            type: DataTypes.STRING,
            get() {
                const name = this.getDataValue('question');
                return name.trim()
            },
            field: 'Question'
        },
    },
    {
        sequelize,
        modelName: 'Question',
        timestamps: false,
        tableName: 'Questions',
    });
}

Question.belongsTo(QuestionType, {
    foreignKey: 'Type',
});

Question.belongsTo(Survey, {
    foreignKey: 'SurveyId',
});