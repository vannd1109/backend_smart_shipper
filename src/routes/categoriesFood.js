const express = require('express');
const router = express.Router();

const categoriesFoodController = require('../app/controllers/CategoriesFoodController');


router.post('/create', categoriesFoodController.create);
router.get('/create', categoriesFoodController.create);
router.get('/', categoriesFoodController.index);

module.exports = router;