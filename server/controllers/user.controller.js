const service = require("../services/user.service");

const getAllUsers = async (req, res) => {
  try {
    const users = await service.getAllUsers();

    res.status(200).send({ users });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getLikedMovies = async (req, res) => {
  try {
    const { userId } = req;

    const movies = await service.getLikedMovies(userId);

    res.status(200).send({ movies });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const addLikedMovie = async (req, res) => {
  try {
    const { userId } = req;
    const { movieId } = req.body;

    await service.addLikedMovie(userId, movieId);

    res.status(200).send("Movie added to your favorites");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const deleteLikedMovie = async (req, res) => {
  try {
    const { userId } = req;
    const movieId = req.params.id;

    await service.deleteLikedMovie(userId, movieId);

    res.status(200).send("Movie has been removed from your favorites");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const deleteAllLikedMovies = async (req, res) => {
  try {
    const { userId } = req;

    await service.deleteAllLikedMovies(userId);

    res.status(200).send("Movies has been removed from your favorites");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const updateProfile = async (req, res) => {
  try {
    const { userId } = req;
    const { fullName, image } = req.body;

    const user = await service.updateProfile(fullName, image, userId);

    res.status(200).send({ user });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const changePassword = async (req, res) => {
  try {
    const { userId } = req;
    const { oldPassword, newPassword } = req.body;

    await service.changePassword(oldPassword, newPassword, userId);

    res.status(200).send("Change password successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const deleteProfile = async (req, res) => {
  try {
    const { userId } = req;

    const user = await service.deleteProfile(userId);

    res.status(200).send({ user });
  } catch (err) {
    err.message === "User not found"
      ? res.status(404).send(err.message)
      : res.status(400).send(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    await service.deleteUser(userId);

    res.status(200).send("Deleted successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getInfor = async (req, res) => {
  const { userId } = req;

  const user = await service.getInfor(userId);

  res.status(200).send({ user });
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
