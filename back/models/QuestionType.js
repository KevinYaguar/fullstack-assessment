import { Sequelize, DataTypes, Model } from 'sequelize';

export class QuestionType extends Model {}

export const init = (sequelize) => {
    QuestionType.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'ID'
        },
        Type: {
            type: DataTypes.STRING,
            get() {
                const name = this.getDataValue('type');
                return name.trim()
            },
            field: 'Type'
        },
    },
    {
        sequelize,
        modelName: 'QuestionType',
        timestamps: false,
        tableName: 'QuestionTypes',
    });
}