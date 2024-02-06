const express = require("express");

const auth = require("../middlewares/auth.middleware");
const movieController = require("../controllers/movie.controller");

const movieRoute = express.Router();

movieRoute.get("/", movieController.getMovies);
movieRoute.get("/random/all", movieController.getRandomMovies);
movieRoute.get("/rated/top", movieController.getTopRatedMovies);
movieRoute.get("/:id", movieController.getMovieById);
movieRoute.post("/:id/reviews", auth(), movieController.createReview);

module.exports = movieRoute;
