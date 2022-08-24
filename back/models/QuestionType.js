import { DataTypes, Model } from 'sequelize';

export class QuestionType extends Model {}

export const init = (sequelize) => {
    QuestionType.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'ID'
        },
        type: {
            type: DataTypes.STRING,
            get() {
                const name = this.getDataValue('type');
                return name.trim()
            },
            field: 'Type'
        },
        name: {
            type: DataTypes.STRING,
            get() {
                const name = this.getDataValue('name');
                return name.trim()
            },
            field: 'Name'
        },
    },
    {
        sequelize,
        modelName: 'QuestionType',
        timestamps: false,
        tableName: 'QuestionTypes',
    });
}