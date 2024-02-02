const express = require("express");

const authController = require("../controllers/auth.controller");

const authRoute = express.Router();

authRoute.post("/login", authController.login);
authRoute.post("/register", authController.register);
authRoute.get("/verify-email", authController.verifyEmail);

module.exports = authRoute;
