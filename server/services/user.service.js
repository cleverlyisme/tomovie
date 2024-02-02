const User = require("../models/user.model");

const updateProfile = async (fullName, image, userId) => {
  const user = await User.findOne({ _id: userId });

  if (!user) throw new Error("User not found");
  if (fullName && !fullName?.trim())
    throw new Error("Full name cannot be empty");
  if (image && !image?.trim()) throw new Error("Empty image");

  user.fullName = fullName || user.fullName;
  user.image = image || user.image;

  const newUser = await user.save();

  return {
    fullName: newUser.fullName,
    image: newUser.image,
  };
};

const deleteUser = async (_id) => {
  const user = await User.findOne({ _id });

  if (!user) throw new Error("User not found");
  if (user.role === "Admin") throw new Error("Cannot delete admin user");

  await user.remove();
};

module.exports = { updateProfile, deleteUser };
