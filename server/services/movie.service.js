const Movie = require("../models/movie.model");
const Category = require("../models/category.model");
const User = require("../models/user.model");

const getMovies = async (filters, page = 1, limit) => {
  const movies = await Movie.find(filters)
    .populate("category")
    .sort({ createdAt: -1 })
    .limit(Number(limit))
    .skip(Number(limit) * (Number(page) - 1))
    .lean();

  const countMovies = await Movie.countDocuments(filters);
  if (countMovies > 0 && movies.length === 0)
    throw new Error("Exceed number of pages");

  const totalPages = countMovies / limit;
  const data = {
    movies,
    page,
    totalPages: Math.ceil(totalPages) || 1,
    count: countMovies,
  };

  return data;
};

const getMovieById = async (_id) => {
  const movie = await Movie.findOne({ _id }).populate("category").lean();

  if (!movie) throw new Error("Movie not found");

  return movie;
};

const getTopRatedMovies = async () => {
  const movies = await Movie.find({})
    .populate("category")
    .sort({ rate: -1 })
    .lean();

  return movies || [];
};

const getRelatedMovies = async (_id) => {
  const movie = await Movie.findOne({ _id }).lean();

  if (!movie) throw new Error("Movie not found");

  const movies = await Movie.find({ category: movie.category }).populate(
    "category"
  );

  return movies || [];
};

const createMovie = async ({
  userId,
  name,
  desc,
  image,
  titleImage,
  rate,
  numberOfReviews,
  category,
  time,
  language,
  year,
  video,
  casts,
}) => {
  const categoryExist = await Category.findOne({ _id: category });

  if (!categoryExist) throw new Error("Category not found");

  const movie = new Movie({
    userId,
    name,
    desc,
    image,
    titleImage,
    rate,
    numberOfReviews,
    category,
    time,
    language,
    year,
    video,
    casts,
  });

  await movie.save();
};

const updateMovie = async ({
  movieId,
  name,
  desc,
  image,
  titleImage,
  rate,
  numberOfReviews,
  category,
  time,
  language,
  year,
  video,
  casts,
}) => {
  const movie = await Movie.findOne({ _id: movieId });

  if (!movie) throw new Error("Movie not found");

  const categoryExist = await Category.findOne({ _id: category });

  if (!categoryExist) throw new Error("Category not found");

  movie.name = name || movie.name;
  movie.desc = desc || movie.desc;
  movie.image = image || movie.image;
  movie.titleImage = titleImage || movie.titleImage;
  movie.rate = rate || movie.rate;
  movie.numberOfReviews = numberOfReviews || movie.numberOfReviews;
  movie.category = category || movie.category;
  movie.time = time || movie.time;
  movie.language = language || movie.language;
  movie.year = year || movie.year;
  movie.video = video || movie.video;
  movie.casts = casts || movie.casts;

  const updatedMovie = await movie.save();
  return updatedMovie;
};

const deleteMovie = async (_id) => {
  const movie = await Movie.findOne({ _id });

  if (!movie) throw new Error("Movie not found");

  await movie.deleteOne();
};

const deleteMovies = async () => {
  await Movie.deleteMany({});
};

const createReview = async (_id, userId, rating, comment) => {
  const movie = await Movie.findOne({ _id });

  if (!movie) throw new Error("Movie not found");

  const existReview = movie.reviews.find(
    (review) => review.userId.toString() === userId.toString()
  );
  if (existReview) throw new Error("You already reviewed this movie");

  const user = await User.findOne({ _id: userId }).lean();
  const review = {
    userId,
    userName: user.fullName,
    userImage: user.image,
    rating: Number(rating),
    comment,
  };

  movie.reviews.push(review);
  movie.numberOfReviews = movie.reviews.length;
  movie.rate =
    movie.reviews.reduce((acc, item) => Number(item.rating) + acc, 0) /
    movie.reviews.length;

  await movie.save();

  return movie;
};

module.exports = {
  getMovies,
  getMovieById,
  getTopRatedMovies,
  getRelatedMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  deleteMovies,
  createReview,
};
