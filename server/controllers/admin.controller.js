const service = require("../services/admin.service");

const importMovies = async (req, res) => {
  try {
    await service.importMovies();

    res.status(200).send("Imported movies successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await service.getAllUsers();

    res.status(200).send({ users });
  } catch (err) {
    res.status(400).send(err.message);
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

const createMovie = async (req, res) => {
  try {
    const { userId } = req;
    const {
      name,
      desc,
      image,
      titleImage,
      rate,
      category,
      time,
      language,
      year,
      video,
      casts,
    } = req.body;

    await service.createMovie({
      userId,
      name,
      desc,
      image,
      titleImage,
      rate,
      category,
      time,
      language,
      year,
      video,
      casts,
    });

    res.sendStatus(201);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const updateMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    const {
      name,
      desc,
      image,
      titleImage,
      rate,
      category,
      time,
      language,
      year,
      video,
      casts,
    } = req.body;

    const movie = await service.updateMovie({
      movieId,
      name,
      desc,
      image,
      titleImage,
      rate,
      category,
      time,
      language,
      year,
      video,
      casts,
    });

    res.status(200).send({ movie });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const deleteMovie = async (req, res) => {
  try {
    const movieId = req.params.id;

    await service.deleteMovie(movieId);

    res.status(200).send("Deleted movie successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const deleteMovies = async (req, res) => {
  try {
    await service.deleteMovies();

    res.status(200).send("Deleted successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
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
