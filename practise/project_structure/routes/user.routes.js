const { Router } = require("express");
const router = Router();
const userController = require("../controllers/user.controller.js");

router.get("/users", userController.getUsers);


module.exports = router;
