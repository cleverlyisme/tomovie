const express = require("express");

const auth = require("../middlewares/auth.middleware");
const adminController = require("../controllers/admin.controller");

const adminRoute = express.Router();

adminRoute.get("/users", auth(["Admin"]), adminController.getAllUsers);
adminRoute.delete("/users/:id", auth(["Admin"]), adminController.deleteUser);

module.exports = adminRoute;
