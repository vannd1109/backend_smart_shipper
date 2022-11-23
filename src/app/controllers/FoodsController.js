const Food = require('../models/Food');

class FoodsController {
    // [GET] /foods
    index(req, res, next){
        Food.find({})
        .then(foods => {
            res.json(foods);
        })
        .catch(next);
    }
}

module.exports = new FoodsController;