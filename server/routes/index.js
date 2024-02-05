const express = require("express");

const authRoute = require("./auth.route");
const adminRoute = require("./admin.route");
const userRoute = require("./user.route");
const movieRoute = require("./movie.route");

const routes = express.Router();

routes.use("/auth", authRoute);
routes.use("/users", userRoute);
routes.use("/admin", adminRoute);
routes.use("/movies", movieRoute);

module.exports = routes;
