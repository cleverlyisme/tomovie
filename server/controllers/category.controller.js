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

const getCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.id;

    const category = await service.getCategoryById(categoryId);

    res.status(200).send({ category });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const { title } = req.body;

    const category = await service.updateCategory(categoryId, title);

    res.status(200).send({ category });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;

    const categories = await service.deleteCategory(categoryId);

    res.status(200).send({ categories });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
