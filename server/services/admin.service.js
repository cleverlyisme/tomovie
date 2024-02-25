const Movie = require("../models/movie.model");
const Category = require("../models/category.model");

const moviesData = require("../data/movies");
const categoriesData = require("../data/categories");

const importMovies = async () => {
  await Movie.deleteMany({});
  await Movie.insertMany(moviesData);
};

const importCategories = async () => {
  await Category.deleteMany({});
  await Category.insertMany(categoriesData);
};

module.exports = {
  importMovies,
  importCategories,
};
