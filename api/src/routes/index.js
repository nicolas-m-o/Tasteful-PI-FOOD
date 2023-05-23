const { Router } = require('express');
// Importar todos los routers;
const recipesRouter = require('./recipes');
const dietsRouter = require('./diets');
const cuisinesRouter = require('./cuisines');

const router = Router();

// Configurar los routers
router.use('/recipes', recipesRouter);
router.use('/diets', dietsRouter);
router.use('/cuisines', cuisinesRouter);

module.exports = router;
