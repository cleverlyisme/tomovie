const User = require("../models/user.model");

const getAllUsers = async () => {
  const users = await User.find({}).lean();

  return users;
};

const deleteUser = async (_id) => {
  const user = await User.findOne({ _id }).lean();

  if (!user) throw new Error("User not found");
  if (user.role === "Admin") throw new Error("Cannot delete admin user");

  await User.deleteOne({ _id });
};

module.exports = {
  getAllUsers,
  deleteUser,
};
