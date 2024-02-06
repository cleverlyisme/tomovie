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

module.exports = {
  importMovies,
  getAllUsers,
  deleteUser,
};
