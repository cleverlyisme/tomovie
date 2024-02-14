const express = require("express");

const auth = require("../middlewares/auth.middleware");
const userController = require("../controllers/user.controller");

const userRoute = express.Router();

userRoute.get("/all", auth(["Admin"]), userController.getAllUsers);
userRoute.put("/change-password", auth(), userController.changePassword);
userRoute.get("/favorites", auth(), userController.getLikedMovies);
userRoute.post("/favorites", auth(), userController.addLikedMovie);
userRoute.delete("/favorites", auth(), userController.deleteAllLikedMovies);
userRoute.put("/profile", auth(), userController.updateProfile);
userRoute.delete("/profile", auth(), userController.deleteProfile);
userRoute.delete("/favorites/:id", auth(), userController.deleteLikedMovie);
userRoute.delete("/:id", auth(["Admin"]), userController.deleteUser);

module.exports = userRoute;
