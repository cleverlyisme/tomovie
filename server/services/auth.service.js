const validator = require("email-validator");
const passwordHash = require("password-hash");
const crypto = require("crypto");

const User = require("../models/user.model");
const Token = require("../models/token.model");

const { sendVerifyToken } = require("./email.service");

const register = async (fullName, email, password, image) => {
  if ([fullName, email, password].some((item) => !item || !item.trim()))
    throw new Error("Please fill in all fields");

  if (!validator.validate(email)) throw new Error("Invalid email address");

  if (password.length < 6)
    throw new Error("Password must be at least 6 characters");

  const existedUser = await User.findOne({ email });
  if (existedUser && existedUser?.isActive) throw new Error("Email existed");

  const user =
    existedUser ||
    new User({
      fullName,
      email,
      password: passwordHash.generate(password),
      image,
    });

  !existedUser && (await user.save());

  const token = crypto.randomBytes(16).toString("hex");

  const verifyToken = new Token({
    userId: existedUser?._id || user._id,
    token,
    expireTime: Date.now() + 600,
  });

  await verifyToken.save();
  await sendVerifyToken(email, token);
};

module.exports = {
  register,
};
