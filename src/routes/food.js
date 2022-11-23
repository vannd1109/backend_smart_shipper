const express = require('express');
const router = express.Router();
const foodsController = require('../app/controllers/FoodsController');

router.get('/', foodsController.index);

module.exports = router;