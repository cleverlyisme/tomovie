const express = require("express");

const auth = require("../middlewares/auth.middleware");
const adminController = require("../controllers/admin.controller");

const adminRoute = express.Router();

adminRoute.get("/users", auth(["Admin"]), adminController.getAllUsers);
adminRoute.post("/movies", auth(["Admin"]), adminController.createMovie);
adminRoute.post(
  "/movies/import",
  auth(["Admin"]),
  adminController.importMovies
);
adminRoute.put("/movies/:id", auth(["Admin"]), adminController.updateMovie);
adminRoute.delete("/movies/all", auth(["Admin"]), adminController.deleteMovies);
adminRoute.delete("/movies/:id", auth(["Admin"]), adminController.deleteMovie);
adminRoute.delete("/users/:id", auth(["Admin"]), adminController.deleteUser);

module.exports = adminRoute;
