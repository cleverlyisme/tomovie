const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema();

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
