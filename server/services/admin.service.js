const Movie = require("../models/movie.model");
const User = require("../models/user.model");

const moviesData = require("../data/movies");

const importMovies = async () => {
  await Movie.deleteMany({});
  await Movie.insertMany(moviesData);
};

const getAllUsers = async () => {
  const users = await User.find({ role: "User" }).lean();

  return users;
};

const deleteUser = async (_id) => {
  const user = await User.findOne({ _id }).lean();

  if (!user) throw new Error("User not found");
  if (user.role === "Admin") throw new Error("Cannot delete admin user");

  await user.deleteOne();
};

const createMovie = async ({
  userId,
  name,
  desc,
  image,
  titleImage,
  rate,
  numberOfReviews,
  category,
  time,
  language,
  year,
  video,
  casts,
}) => {
  const movie = new Movie({
    userId,
    name,
    desc,
    image,
    titleImage,
    rate,
    numberOfReviews,
    category,
    time,
    language,
    year,
    video,
    casts,
  });

  await movie.save();
};

const updateMovie = async ({
  movieId,
  name,
  desc,
  image,
  titleImage,
  rate,
  numberOfReviews,
  category,
  time,
  language,
  year,
  video,
  casts,
}) => {
  const movie = await Movie.findOne({ _id: movieId });

  if (!movie) throw new Error("Movie not found");

  movie.name = name || movie.name;
  movie.desc = desc || movie.desc;
  movie.image = image || movie.image;
  movie.titleImage = titleImage || movie.titleImage;
  movie.rate = rate || movie.rate;
  movie.numberOfReviews = numberOfReviews || movie.numberOfReviews;
  movie.category = category || movie.category;
  movie.time = time || movie.time;
  movie.language = language || movie.language;
  movie.year = year || movie.year;
  movie.video = video || movie.video;
  movie.casts = casts || movie.casts;

  const updatedMovie = await movie.save();
  return updatedMovie;
};

const deleteMovie = async (_id) => {
  const movie = await Movie.findOne({ _id });

  if (!movie) throw new Error("Movie not found");

  await movie.deleteOne();
};

const deleteMovies = async () => {
  await Movie.deleteMany({});
};

module.exports = {
  importMovies,
  getAllUsers,
  deleteUser,
  createMovie,
  updateMovie,
  deleteMovie,
  deleteMovies,
};
