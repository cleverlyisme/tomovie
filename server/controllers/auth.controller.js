const service = require("../services/auth.service");

const register = async (req, res) => {
  const { fullName, email, password, image } = req.body;
  try {
    await service.register(fullName, email, password, image);

    res.status(201).send("Please check your email to verify your account");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { register };
