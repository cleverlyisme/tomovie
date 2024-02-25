const express = require("express");

const auth = require("../middlewares/auth.middleware");
const movieController = require("../controllers/movie.controller");

const movieRoute = express.Router();

movieRoute.get("/", movieController.getMovies);
movieRoute.post("/", auth(["Admin"]), movieController.createMovie);
movieRoute.delete("/all", auth(["Admin"]), movieController.deleteMovies);
movieRoute.get("/rated/top", movieController.getTopRatedMovies);
movieRoute.get("/:id", movieController.getMovieById);
movieRoute.put("/:id", auth(["Admin"]), movieController.updateMovie);
movieRoute.delete("/:id", auth(["Admin"]), movieController.deleteMovie);
movieRoute.get("/related/:id", movieController.getRelatedMovies);
movieRoute.post("/:id/reviews", auth(), movieController.createReview);

module.exports = movieRoute;
