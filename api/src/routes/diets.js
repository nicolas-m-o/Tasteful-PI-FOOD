const { Router } = require('express');
const { dietsGet } = require('../controllers/diets');


const router = Router();

router.get('/', dietsGet);

module.exports = router;
