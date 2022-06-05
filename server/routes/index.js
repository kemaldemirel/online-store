const Router = require("express");

const router = new Router();

const deviceRouter = require("./device");
const userRouter = require("./user");
const brandRouter = require("./brand");
const typeRouter = require("./type");

router.use("/brand", brandRouter);
router.use("/user", userRouter);
router.use("/device", deviceRouter);
router.use("/type", typeRouter);

module.exports = router;
