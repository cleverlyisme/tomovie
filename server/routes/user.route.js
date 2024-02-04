const express = require("express");

const auth = require("../middlewares/auth.middleware");
const userController = require("../controllers/user.controller");

const userRoute = express.Router();

userRoute.put("/users/change-password", auth(), userController.changePassword);
userRoute.get("/users/favorites", auth(), userController.getLikedMovies);
userRoute.post("/users/favorites", auth(), userController.addLikedMovie);
userRoute.delete(
  "/users/favorites",
  auth(),
  userController.deleteAllLikedMovies
);
userRoute.put("/users/profile", auth(), userController.updateProfile);
userRoute.delete("/users/profile", auth(), userController.deleteProfile);
userRoute.delete(
  "/users/favorites/:id",
  auth(),
  userController.deleteLikedMovie
);

module.exports = userRoute;
