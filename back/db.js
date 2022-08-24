import { Sequelize } from 'sequelize';
import { init as initSurvey } from './models/Survey.js';
import { init as initQuestionType } from './models/QuestionType.js';
import { init as initQuestion } from './models/Question.js';
import { init as initOption } from './models/Option.js';

const testConnection = async (sequelize) => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.log(error);
        console.error('Unable to connect to the database:', error);
    }
}

const initModels = (sequelize) => {
    initSurvey(sequelize);
    initQuestionType(sequelize);
    initQuestion(sequelize);
    initOption(sequelize);
}

export const setupSequalizeConnection = async () => {
    const sequelize = new Sequelize(
        process.env.DB_NAME || '',
        process.env.USER_DB || 'sa',
        process.env.PASSWORD_DB || '',
        {
            host: process.env.SERVER_DB || 'localhost',
            dialect: "mssql",
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
            dialectOptions: {
                setTimeout: 60000,
                connectTimeout: 60000,
                options: { "requestTimeout": 300000 }
            }
        }
    );

    await testConnection(sequelize);

    initModels(sequelize);

    return sequelize;
}