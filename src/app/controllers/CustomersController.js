const Customer = require("../models/Customer");

class CustomersController {
  // [GET] /customers
  index(req, res, next) {
    Customer.find({})
      .then((customers) => res.json(customers))
      .catch(next);
  }
}

module.exports = new CustomersController();
