const service = require("../services/admin.service");

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
    err.message === "User not found"
      ? res.status(404).send(err.message)
      : res.status(400).send(err.message);
  }
};

module.exports = {
  getAllUsers,
  deleteUser,
};
