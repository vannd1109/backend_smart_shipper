const productsRouter = require('./products');
const customersRouter = require('./customers');
const cateroiesFoodRouter = require('./categoriesFood');
const foodsRouter = require('./food');
const siteRouter = require('./site');

const route = (app) => {
  app.use('/products', productsRouter);
  app.use('/customers', customersRouter);
  app.use('/categories-food', cateroiesFoodRouter);
  app.use('/foods',foodsRouter);
  app.use('/', siteRouter);
};

module.exports = route;
