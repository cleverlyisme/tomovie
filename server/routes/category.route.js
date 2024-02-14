const express = require("express");

const auth = require("../middlewares/auth.middleware");
const categoryController = require("../controllers/category.controller");

const categoryRoute = express.Router();

categoryRoute.get("/", categoryController.getCategories);
categoryRoute.post("/", auth(["Admin"]), categoryController.createCategory);
categoryRoute.put("/:id", auth(["Admin"]), categoryController.updateCategory);
categoryRoute.delete(
  "/:id",
  auth(["Admin"]),
  categoryController.deleteCategory
);

module.exports = categoryRoute;
