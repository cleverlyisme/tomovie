const Category = require("../models/category.model");

const getCategories = async () => {
  const categories = await Category.find({}).lean();

  return categories || [];
};

const createCategory = async (title) => {
  const category = new Category({ title });

  await category.save();
};

module.exports = { getCategories, createCategory };
