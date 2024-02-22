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
  if (!user) throw new Error("Invalid email or password");
  if (!user.isActive) throw new Error("Please verify your account first");

  const isPassed = passwordHash.verify(password, user.password);
  if (!isPassed) throw new Error("Invalid email or password");

  const { _id, fullName, image, role } = user;

  return {
    token: jsonwebtoken.sign({ _id, role }, JWT_SECRET_KEY, {
      expiresIn: "30d",
    }),
    user: { _id, fullName, email, image, role },
  };
};

const register = async (fullName, email, password, image) => {
  if ([fullName, email, password].some((item) => !item || !item.trim()))
    throw new Error("Please fill in all fields");

  if (!validator.validate(email)) throw new Error("Invalid email address");

  if (password.length < 6 || password.includes(" "))
    throw new Error(
      "Password must be at least 6 characters and not contain space characters"
    );

  const pattern = /(?=.*[0-9])/;
  if (!pattern.test(password)) throw new Error("Password must contain number");

  const existedUser = await User.findOne({ email });
  if (existedUser && existedUser?.isActive)
    throw new Error("Email already existed");

  const user =
    existedUser ||
    new User({
      fullName,
      email,
      password: passwordHash.generate(password),
      image: image || "/assets/images/avatar.png",
    });

  const tokenFound = await Token.findOne({
    userId: user._id,
  })
    .sort("-expireTime")
    .lean();

  if (tokenFound) {
    const sentTime = Number(tokenFound.expireTime) - 240000;
    if (Date.now() < sentTime)
      throw new Error("Please wait 1 minute after every time sent token");
  }

  if (existedUser) {
    existedUser.fullName = fullName;
    existedUser.password = passwordHash.generate(password);
    await existedUser.save();
  } else await user.save();

  const token = crypto.randomBytes(16).toString("hex");

  const verifyToken = new Token({
    userId: user._id,
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
