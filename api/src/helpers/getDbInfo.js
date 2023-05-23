const { Op } = require('sequelize');
const { Recipe, Diet } = require('../db');

const getRecipesDb = async () => {
    const recipes = await Recipe.findAll();
    const recipesWithDiets = await Promise.all(
        recipes.map(async (recipe) => {
            const diets = await recipe.getDiets();
            const dietsString = diets.map((diet) => diet.name);
            return { ...recipe.toJSON(), diets: dietsString };
        })
    );

    return recipesWithDiets;
};

const getRecipesDbById = async (id) => {
    if (!id) throw new Error(`The id is required`);

    const recipe = await Recipe.findByPk(id);
    if (!recipe) return;
    const diets = await recipe.getDiets();
    const dietsString = diets.map((diet) => diet.name);
    return { ...recipe.toJSON(), diets: dietsString };
};

const getRecipeDbByName = async (name) => {
    const recipe = await Recipe.findAll(
        {
            where: {
                title: {
                    [Op.iLike]: `%${name}%`,
                },
            },
        },
        {
            include: {
                model: Diet,
                through: {
                    attributes: [],
                },
            },
        }
    );
    if (!recipe) throw new Error(`Does not exist recipes with name: ${name}`);
    return recipe;
};

module.exports = {
    getRecipesDb,
    getRecipesDbById,
    getRecipeDbByName,
};
