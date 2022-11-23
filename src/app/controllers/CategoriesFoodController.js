const mongoose = require("mongoose");
const CategoryFood = require("../models/CategoryFood");

class CategoriesFoodController {
  // [GET] /categories-food
  index(req, res, next) {
    CategoryFood.find({})
      .then((categoriesFood) => {
        res.json(categoriesFood);
      })
      .catch(next);
  }
  // [POST] /categories-food
  create(req, res, next) {
    try {
      const formData = req.body.category;
      if(formData){
         const categoryFoodItem = new CategoryFood(formData);

        categoryFoodItem.save(function (err) {
            if (err) return handleError(err);
            console.log("Created Success!!!");
        });
      }else {
        console.log('No data');
      }
     
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CategoriesFoodController();
