const express = require("express");

const authRoute = require("./auth.route");

const routes = express.Router();

routes.use(authRoute);

module.exports = routes;
