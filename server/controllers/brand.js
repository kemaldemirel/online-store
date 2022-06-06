const { Brand } = require("../models/models");

class BrandController {
  async getBrand(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }

  async postBrand(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  }
}

module.exports = new BrandController();
