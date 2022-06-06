const { Type } = require("../models/models");
const AppiError = require("../error/ApiError");

class TypeController {
  async getType(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }

  async setType(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }
}

module.exports = new TypeController();
