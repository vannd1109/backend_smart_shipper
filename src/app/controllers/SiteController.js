class SiteController {
  // [GET] /products
  index(req, res) {
    res.send('Home Page');
  }

  // [GET] /:slug
  search(req, res) {
    res.send('Search Page');
  }
}

module.exports = new SiteController();
