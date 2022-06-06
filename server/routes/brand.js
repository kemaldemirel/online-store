const Router = require("express");
const router = new Router();
const BrandController = require("../controllers/brand");

router.post("/", BrandController.postBrand);
router.get("/", BrandController.getBrand);

module.exports = router;
