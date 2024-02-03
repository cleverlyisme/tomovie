const service = require("../services/user.service");

const updateProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const { fullName, image } = req.body;

    const user = await service.updateProfile(fullName, image, userId);

    res.status(200).send({ user });
  } catch (err) {
    err.message === "User not found"
      ? res.status(404).send(err.message)
      : res.status(400).send(err.message);
  }
};

const changePassowrd = async (req, res) => {
  try {
    const { userId } = req;
    const { oldPassowrd, newPassword } = req.body;

    await service.changePassword(oldPassowrd, newPassword, userId);

    res.status(200).send("Change password successfully");
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
    err.message === "User not found"
      ? res.status(404).send(err.message)
      : res.status(400).send(err.message);
  }
};

module.exports = { updateProfile, changePassowrd, deleteUser };
