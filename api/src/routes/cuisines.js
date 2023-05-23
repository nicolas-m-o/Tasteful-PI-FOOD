const { Router } = require('express');
const { cuisinesGet } = require('../controllers/cuisines');


const router = Router();

router.get('/', cuisinesGet);

module.exports = router;
