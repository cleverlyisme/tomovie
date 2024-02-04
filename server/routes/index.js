const express = require("express");

const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const adminRoute = require("./admin.route");

const routes = express.Router();

routes.use("/auth", authRoute);
routes.use(userRoute);
routes.use(adminRoute);

module.exports = routes;
