class ProductsController {
  // [GET] /products
  index(req, res) {
    res.send('Product Page');
  }

  // [GET] /:slug
  detail(req, res) {
    res.send('Product Detail');
  }
}

module.exports = new ProductsController();
