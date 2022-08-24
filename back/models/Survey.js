import { DataTypes, Model } from 'sequelize';

export class Survey extends Model {}

export const init = (sequelize) => {
    Survey.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'ID'
        },
        title: {
            type: DataTypes.STRING,
            get() {
                const name = this.getDataValue('title');
                return name.trim()
            },
            field: 'Title'
        },
        description: {
            type: DataTypes.STRING,
            get() {
                const name = this.getDataValue('description');
                return name.trim()
            },
            field: 'Description'
        },
    },
    {
        sequelize,
        modelName: 'Survey',
        timestamps: false,
        tableName: 'Surveys',
    });
}