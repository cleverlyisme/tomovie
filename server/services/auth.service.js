const passwordHash = require("password-hash");

const User = require("../models/user.model");

const register = async (fullName, email, password, image) => {
  if (!password.trim()) throw new Error("Empty password");

  if (password.length < 6)
    throw new Error("Password must be at least 6 characters");

  const existedEmail = await User.findOne({ email });
  if (existedEmail) throw new Error("Email existed");

  const user = new User({
    fullName,
    email,
    password: passwordHash.generate(password),
    image,
  });

  await user.save();
};

module.exports = {
  register,
};
