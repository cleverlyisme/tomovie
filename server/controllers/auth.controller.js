const service = require("../services/auth.service");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { token, user } = await service.login(email, password);

    res.status(200).send({ token, user });
  } catch (err) {
    res.status(401).send(err.message);
  }
};

const register = async (req, res) => {
  const { fullName, email, password, image } = req.body;
  try {
    await service.register(fullName, email, password, image);

    res.status(201).send("Please check your email to verify your account");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const verifyEmail = async (req, res) => {
  const { token } = req.query;
  try {
    await service.verifyEmail(token);

    res.status(201).send("Confirmed email successfully");
  } catch (err) {
    res.sendStatus(404);
  }
};

module.exports = { login, register, verifyEmail };
