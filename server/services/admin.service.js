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

  await User.deleteOne({ _id });
};

module.exports = {
  importMovies,
  getAllUsers,
  deleteUser,
};
