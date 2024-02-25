const Category = require("../models/category.model");
const Movie = require("../models/movie.model");

const getCategories = async () => {
  const categories = await Category.find({}).lean();

  return categories || [];
};

const getCategoryById = async (_id) => {
  const category = await Category.findOne({ _id }).lean();

  if (!category) throw new Error("Category not found");

  return category;
};

const createCategory = async (title) => {
  const category = new Category({ title });

  await category.save();
};

const updateCategory = async (_id, title) => {
  const category = await Category.findOne({ _id });

  if (!category) throw new Error("Category not found");

  const exist = await Category.findOne({ title }).lean();

  if (exist) throw new Error("Category with this title already exists");

  category.title = title || category.title;

  await category.save();

  return category;
};

const deleteCategory = async (_id) => {
  const category = await Category.findOne({ _id });

  if (!category) throw new Error("Category not found");

  await category.deleteOne();
  await Movie.deleteMany({ categoryId: _id });

  const categories = await Category.find({}).lean();

  return categories;
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
