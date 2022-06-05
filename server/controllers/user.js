class User {
  async registration(req, res) {
    res.json("reg");
  }

  async login(req, res) {}

  async check(req, res) {
    res.json("asfsdf");
  }
}

module.exports = new User();
