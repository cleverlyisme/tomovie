const express = require("express");

const authController = require("../controllers/auth.controller");

const authRoute = express.Router();

authRoute.post("/auth/login", authController.login);
authRoute.post("/auth/register", authController.register);
authRoute.get("/auth/verify-email", authController.verifyEmail);

module.exports = authRoute;
