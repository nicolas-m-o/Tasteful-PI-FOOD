const { response, request } = require('express');
const { Diet } = require('../db');

const dietsGet = async (req = request, res = response) => {
    try {
        const diets = await Diet.findAll();
        res.status(200).json(diets);
    } catch (error) {
        res.status(400).json({ error });
    }
};
module.exports = {
    dietsGet,
};
