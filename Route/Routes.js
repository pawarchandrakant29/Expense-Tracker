const express = require("express");
const router = express.Router();
const controller = require("../Controllers/myControllers");

router.get("/", controller.defaultController);
router.get("/add", controller.newaddController);
router.get("/edit/:id", controller.editTransactionController);
router.post("/:id?", controller.updateTransactionController);
router.post("/delete/:id", controller.deleteTransactionController);

module.exports = router;
