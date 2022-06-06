const Router = require("express");
const router = new Router();
const TypeController = require("../controllers/type");

router.post("/", TypeController.setType);
router.get("/", TypeController.getType);

module.exports = router;
