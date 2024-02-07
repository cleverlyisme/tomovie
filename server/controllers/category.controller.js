const service = require("../services/category.service");

const getCategories = async (req, res) => {
  try {
    const categories = await service.getCategories();

    res.status(200).send({ categories });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const createCategory = async (req, res) => {
  try {
    const { title } = req.body;

    await service.createCategory(title);

    res.sendStatus(201);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { getCategories, createCategory };
