const {
    getApiInfo,
    getApiInfoById,
    getApiInfoByName,
} = require('./getApiInfo');
const {
    getRecipesDb,
    getRecipesDbById,
    getRecipeDbByName,
} = require('./getDbInfo');

// Obtener todas las recetas tanto de la api como de la base de datos
const getInfo = async () => {
    const results1 = await getRecipesDb();
    const results2 = await getApiInfo();
    const allRecipes = results1.concat(results2);
    return allRecipes;
};

const getInfoById = async (id) => {
    if (!id) throw new Error(`The id is required`);

    try {
        // información de la db
        const resultDb = await getRecipesDbById(id);
        if (resultDb) {
            return resultDb;
        }
        // informacion de la api
        const resultApi = await getApiInfoById(id);
        if (resultApi) {
            const receta = {
                pricePerServing: resultApi.pricePerServing,
                readyInMinutes: resultApi.readyInMinutes,
                servings: resultApi.servings,
                healthScore: resultApi.healthScore,
                title: resultApi.title,
                image: resultApi.image,
                summary: resultApi.summary,
                cuisines: resultApi.cuisines,
                dishTypes: resultApi.dishTypes,
                steps: resultApi.analyzedInstructions[0]?.steps,
                diets: resultApi.diets,
            };
            return receta;
        }

        throw new Error(`Does not exist a recipe with id: ${id}`);
    } catch (error) {
        throw new Error(error);
    }
};

const getInfoBySearch = async (search) => {
    if (!search) throw new Error(`The search is required`);
    try {
        const recipesDb = await getRecipeDbByName(search);
        const recipesApi = await getApiInfoByName(search);
        const allRecipes = recipesDb.concat(recipesApi);
        return allRecipes;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    getInfo,
    getInfoById,
    getInfoBySearch,
};
