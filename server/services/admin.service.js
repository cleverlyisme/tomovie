const Movie = require("../models/movie.model");
const User = require("../models/user.model");

const moviesData = require("../data/movies");

const importMovies = async () => {
  await Movie.deleteMany({});
  await Movie.insertMany(moviesData);
};

module.exports = {
  importMovies,
};
