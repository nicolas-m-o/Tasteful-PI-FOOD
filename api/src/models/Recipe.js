const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo

    sequelize.define(
        'recipe',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            pricePerServing: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            readyInMinutes: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            servings: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            healthScore: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            summary: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            cuisines: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false,
            },
            steps: {
                type: DataTypes.ARRAY(DataTypes.JSON),
                // allowNull: false,
            },
            db: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            timestamps: false,
        }
    );
};
