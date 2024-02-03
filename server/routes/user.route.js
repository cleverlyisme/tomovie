const express = require("express");

const auth = require("../middlewares/auth.middleware");
const userController = require("../controllers/user.controller");

const userRoute = express.Router();

userRoute.put("/users/:id", auth(), userController.updateProfile);
userRoute.put("/users/change-password", auth(), userController.updateProfile);
userRoute.delete("/users/:id", auth(["Admin"]), userController.updateProfile);

module.exports = userRoute;
