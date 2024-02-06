const Movie = require("../models/movie.model");
const User = require("../models/user.model");

const getMovies = async (filters, page = 1, limit) => {
  const movies = await Movie.find(filters)
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
  const movie = await Movie.findOne({ _id }).lean();

  if (!movie) throw new Error("Movie not found");

  return movie;
};

const getTopRatedMovies = async () => {
  const movies = await Movie.find({}).sort({ rate: -1 }).lean();

  return movies || [];
};

const getRandomMovies = async () => {
  const movies = await Movie.aggregate([{ $sample: { size: 8 } }]);

  return movies || [];
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
    movie.reviews.reduce((acc, item) => item.rating + acc, 0) /
    movie.reviews.length;

  await movie.save();
};

module.exports = {
  getMovies,
  getMovieById,
  getTopRatedMovies,
  getRandomMovies,
  createReview,
};
