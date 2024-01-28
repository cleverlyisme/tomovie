const express = require("express");

// const auth = require("../middlewares/auth.middleware");
const authController = require("../controllers/auth.controller");

const authRoute = express.Router();

// authRoute.post("/auth/login", authController.login);
authRoute.post("/auth/register", authController.register);

module.exports = authRoute;
