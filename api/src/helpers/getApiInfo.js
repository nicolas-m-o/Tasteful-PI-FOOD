const axios = require('axios');
require('dotenv').config();

// Creo una instancia de axios para poder señalar
// la base url de la API para de esta forma no tener
// que estar escribiendola a cada rato
const instance = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes',
});

const { API_KEY } = process.env;

const getApiInfo = async () => {
    try {
        const { data } = await instance(
            `/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
        );

        return data.results;
    } catch (error) {
        throw new Error(error);
    }
};

const getApiInfoById = async (id) => {
    //${id}/information?apiKey=${API_KEY}
    try {
        const { data } = await instance(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
        );
        return data;
    } catch (error) {
        throw new Error(error);
    }
};

const getApiInfoByName = async (name) => {
    try {
        const { data } = await instance(
            `/complexSearch?apiKey=${API_KEY}&titleMatch=${name}&addRecipeInformation=true`
        );
        return data.results;
    } catch (error) {
        throw new Error(error);
    }
};
// exporto los helpers
module.exports = {
    getApiInfo,
    getApiInfoById,
    getApiInfoByName,
};
