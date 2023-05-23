const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        'cuisine',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.ENUM(
                    'African',
                    'American',
                    'British',
                    'Cajun',
                    'Caribbean',
                    'Chinese',
                    'Eastern European',
                    'European',
                    'French',
                    'German',
                    'Greek',
                    'Indian',
                    'Irish',
                    'Italian',
                    'Japanese',
                    'Jewish',
                    'Korean',
                    'Latin American',
                    'Mediterranean',
                    'Mexican',
                    'Middle Eastern',
                    'Nordic',
                    'Southern',
                    'Spanish',
                    'Thai',
                    'Vietname'
                ),
                allowNull: false,
            },
        },
        {
            timestamps: false,
        }
    );
};
