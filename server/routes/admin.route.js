const express = require("express");

const auth = require("../middlewares/auth.middleware");
const adminController = require("../controllers/admin.controller");

const adminRoute = express.Router();

adminRoute.post(
  "/movies/import",
  auth(["Admin"]),
  adminController.importMovies
);
adminRoute.post(
  "/categories/import",
  auth(["Admin"]),
  adminController.importCategories
);

module.exports = adminRoute;
