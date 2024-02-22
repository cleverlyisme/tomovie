const passwordHash = require("password-hash");

const User = require("../models/user.model");
const Movie = require("../models/movie.model");

const getAllUsers = async () => {
  const users = await User.find({ role: "User" })
    .select(["-password", "-__v"])
    .lean();

  return users;
};

const getLikedMovies = async (_id) => {
  const user = await User.findOne({ _id }).lean();

  return user?.likedMovies || [];
};

const addLikedMovie = async (userId, movieId) => {
  const user = await User.findOne({ _id: userId });
  const movie = await Movie.findOne({ _id: movieId }).lean();

  if (!user) throw new Error("User not found");
  if (!movie) throw new Error("Movie not found");

  if (user.likedMovies.includes(movieId))
    throw new Error("Movie already exists in your favorites");

  user.likedMovies.push(movieId.toString());

  await user.save();
};

const deleteLikedMovie = async (userId, movieId) => {
  const user = await User.findOne({ _id: userId });
  const movie = await Movie.findOne({ _id: movieId }).lean();

  if (!user) throw new Error("User not found");
  if (!movie) throw new Error("Movie not found");

  if (!user.likedMovies.includes(movieId))
    throw new Error("Movie doesn't exist in your favorites");

  user.likedMovies = user.likedMovies.filter(
    (movie) => movie.toString() !== movieId
  );
  await user.save();
};

const deleteAllLikedMovies = async (userId) => {
  const user = await User.findOne({ _id: userId });

  if (!user) throw new Error("User not found");

  user.likedMovies = [];
  await user.save();
};

const updateProfile = async (fullName, image, userId) => {
  const user = await User.findOne({ _id: userId }).select([
    "-password",
    "-__v",
  ]);

  if (!user) throw new Error("User not found");
  if (fullName && !fullName?.trim())
    throw new Error("Full name cannot be empty");
  if (image && !image?.trim()) throw new Error("Empty image");

  user.fullName = fullName || user.fullName;
  user.image = image || user.image;

  const newUser = await user.save();

  return newUser;
};

const changePassword = async (oldPassword, newPassword, _id) => {
  const user = await User.findOne({ _id });
  const isPassed = passwordHash.verify(oldPassword, user.password);
  const isDuplicate = passwordHash.verify(newPassword, user.password);
  if (!isPassed) throw new Error("Password does not correct");
  if (isDuplicate) throw new Error("Duplicate old password");

  if (
    !newPassword ||
    !newPassword.trim() ||
    newPassword.includes(" ") ||
    (newPassword.length < 6 && user.role !== "Admin")
  )
    throw new Error(
      "Password must be at least 6 characters and not contain space characters"
    );

  const pattern = /(?=.*[0-9])/;
  if (!pattern.test(newPassword))
    throw new Error("Password must contain number");

  user.password = passwordHash.generate(newPassword);

  await user.save();
};

const deleteProfile = async (_id) => {
  const user = await User.findOne({ _id });

  if (!user) throw new Error("User not found");

  await user.deleteOne();
};

const deleteUser = async (_id) => {
  const user = await User.findOne({ _id }).lean();

  if (!user) throw new Error("User not found");
  if (user.role === "Admin") throw new Error("Cannot delete admin user");

  await user.deleteOne();
};

const getInfor = async (_id) => {
  const user = await User.findOne({ _id }).select(["-password", "-__v"]).lean();

  return user;
};

module.exports = {
  getAllUsers,
  getLikedMovies,
  addLikedMovie,
  deleteLikedMovie,
  deleteAllLikedMovies,
  updateProfile,
  changePassword,
  deleteProfile,
  deleteUser,
  getInfor,
};
