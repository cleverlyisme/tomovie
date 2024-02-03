const validator = require("email-validator");
const jsonwebtoken = require("jsonwebtoken");
const passwordHash = require("password-hash");
const crypto = require("crypto");

const User = require("../models/user.model");
const Token = require("../models/token.model");

const { sendVerifyToken } = require("./email.service");
const { JWT_SECRET_KEY, APP_EMAIL_EXPIRE } = require("../utils/environments");

const login = async (email, password) => {
  const user = await User.findOne({ email }).lean();
  if (!user) throw new Error("Unauthorized");
  if (!user.isActive) throw new Error("Please active your account first");

  const isPassed = passwordHash.verify(password, user.password);
  if (!isPassed) throw new Error("Invalid password");

  const { _id, role } = user;

  return {
    token: jsonwebtoken.sign({ _id, role }, JWT_SECRET_KEY, {
      expiresIn: "7d",
    }),
    user: { _id },
  };
};

const register = async (fullName, email, password, image) => {
  if ([fullName, email, password].some((item) => !item || !item.trim()))
    throw new Error("Please fill in all fields");

  if (!validator.validate(email)) throw new Error("Invalid email address");

  if (password.length < 6 || password.inludes(""))
    throw new Error(
      "Password must be at least 6 characters and not contain space characters"
    );

  const existedUser = await User.findOne({ email });
  if (existedUser && existedUser?.isActive)
    throw new Error("Email already existed");

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
    expireTime: Date.now() + Number(APP_EMAIL_EXPIRE),
  });

  await verifyToken.save();
  await sendVerifyToken(email, token);
};

const verifyEmail = async (token) => {
  const tokenFound = await Token.findOne({ token }).lean();

  if (!tokenFound || Date.now() > tokenFound?.expireTime) throw new Error();

  const user = await User.findOne({ _id: tokenFound.userId });

  if (user.isActive) throw new Error();

  user.isActive = true;

  await user.save();
  await Token.deleteMany({ expireTime: { $lt: Date.now() } });
};

module.exports = {
  login,
  register,
  verifyEmail,
};
