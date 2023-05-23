const { Router } = require('express');
const {
    recipesGet,
    recipesGetbyId,
    recipesPost,
    recipesDelete,
} = require('../controllers/recipes');

const router = Router();

router.get('/', recipesGet);
router.get('/:id', recipesGetbyId);

router.delete('/:id', recipesDelete);
router.post('/', recipesPost);
module.exports = router;
