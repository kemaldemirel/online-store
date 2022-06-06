const ApiError = require("../error/ApiError");

class Device {
  async getAll(req, res) {}

  async getOne(req, res, next) {
    const { id } = req.query;

    if (!id) {
      return next(ApiError.badRequest("id not found"));
    }

    res.json({ id });
  }

  async create(req, res) {}
}

module.exports = new Device();
