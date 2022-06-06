const Router = require("express");
const router = new Router();
const DeviceController = require("../controllers/device");

router.post("/", DeviceController.create);
router.get("/", DeviceController.getAll);
router.get("/:id", DeviceController.getOne);

module.exports = router;
