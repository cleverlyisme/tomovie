const Movie = require("../models/movie.model");

const getMovies = async ({ filters, page = 1, limit }) => {
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

module.exports = { getMovies };
