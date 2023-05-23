const { response, request } = require('express');
const { getInfo, getInfoById, getInfoBySearch } = require('../helpers/getInfo');
const { Recipe, Diet } = require('../db');

const recipesGet = async (req = request, res = response) => {
    const { name } = req.query;
    try {
        const recipes = name ? await getInfoBySearch(name) : await getInfo();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const recipesGetbyId = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const recipe = await getInfoById(id);
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const recipesPost = async (req = request, res = response) => {
    const {
        id,
        pricePerServing,
        readyInMinutes,
        servings,
        healthScore,
        title,
        image,
        diets,
        summary,
        cuisines,
        dishTypes,
        steps,
    } = req.body;
    try {
        // añadimos el registo al modelo Recipe
        const recipe = await Recipe.create({
            id,
            pricePerServing,
            readyInMinutes,
            servings,
            healthScore,
            title,
            image,
            summary,
            cuisines,
            dishTypes,
            steps,
        });
        // Añadimos la relación de diets
        await recipe.addDiet(diets);
        res.status(201).json(recipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const recipesDelete = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const recipeToDelete = await Recipe.findByPk(id);
        await recipeToDelete.destroy();
        res.status(200).json({
            msg: 'Recipe deleted succesfull',
            recipeDeleted: recipeToDelete,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
module.exports = {
    recipesGet,
    recipesGetbyId,
    recipesPost,
    recipesDelete,
};
