const Category = require("../models/category.model");

const getCategories = async () => {
  const categories = await Category.find({}).lean();

  return categories || [];
};

const createCategory = async (title) => {
  const category = new Category({ title });

  await category.save();
};

const updateCategory = async (_id, title) => {
  const category = await Category.findOne({ _id });

  if (!category) throw new Error("Category not found");

  category.title = title || category.title;

  await category.save();

  return category;
};

const deleteCategory = async (_id) => {
  const category = await Category.findOne({ _id });

  if (!category) throw new Error("Category not found");

  await category.deleteOne();
};

module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
