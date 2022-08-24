import { DataTypes, Model } from 'sequelize';
import { Question } from './Question.js';

export class OptionsDB extends Model {}

export const init = (sequelize) => {
    OptionsDB.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'ID'
        },
        options: {
            type: DataTypes.STRING,
            get() {
                const name = this.getDataValue('options');
                return name.trim()
            },
            field: 'Options'
        },
    },
    {
        sequelize,
        modelName: 'OptionsDB',
        timestamps: false,
        tableName: 'Options',
    });
    
    OptionsDB.belongsTo(Question, {
        foreignKey: 'QuestionId',
    });

}