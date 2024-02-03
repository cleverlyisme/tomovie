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

const changePassowrd = async (oldPassowrd, newPassword, _id) => {
  const user = await User.findOne({ _id });

  const isPassed = passwordHash.verify(oldPassowrd, user.password);
  if (!isPassed) throw new Error("Password does not correct");

  if (
    !newPassword ||
    !newPassword.trim() ||
    newPassword.includes("") ||
    newPassword.length < 6
  )
    throw new Error(
      "Password must be at least 6 characters and not contain space characters"
    );

  user.password = passwordHash.generate(newPassword);

  await user.save();
};

const deleteUser = async (_id) => {
  const user = await User.findOne({ _id });

  if (!user) throw new Error("User not found");
  if (user.role === "Admin") throw new Error("Cannot delete admin user");

  await user.remove();
};

module.exports = { updateProfile, changePassowrd, deleteUser };
