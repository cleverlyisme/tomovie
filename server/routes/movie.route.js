const express = require("express");

const auth = require("../middlewares/auth.middleware");
const movieController = require("../controllers/movie.controller");

const movieRoute = express.Router();

movieRoute.get("/", movieController.getMovies);

module.exports = movieRoute;
