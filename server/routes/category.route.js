const express = require("express");

const auth = require("../middlewares/auth.middleware");
const categoryController = require("../controllers/category.controller");

const categoryRoute = express.Router();

categoryRoute.get("/", categoryController.getCategories);
categoryRoute.post("/", auth(["Admin"]), categoryController.createCategory);

module.exports = categoryRoute;
