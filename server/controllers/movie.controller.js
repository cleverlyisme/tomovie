const service = require("../services/movie.service");

const getMovies = async (req, res) => {
  try {
    const { category, time, language, rate, year, search, page, limit } =
      req.query;
    const filters = {
      ...(category && { category }),
      ...(time && { time }),
      ...(language && { language }),
      ...(rate && { rate }),
      ...(year && { year }),
      ...(search && { name: { $regex: search, $options: "i" } }),
    };

    const movies = await service.getMovies(filters, page, limit);

    res.status(200).send(movies);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getMovieById = async (req, res) => {
  try {
    const movieId = req.params.id;

    const movie = await service.getMovieById(movieId);

    res.status(200).send({ movie });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getTopRatedMovies = async (req, res) => {
  try {
    const movies = await service.getTopRatedMovies();

    res.status(200).send({ movies });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getRandomMovies = async (req, res) => {
  try {
    const movies = await service.getRandomMovies();

    res.status(200).send({ movies });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const createReview = async (req, res) => {
  try {
    const { userId } = req;
    const movieId = req.params.id;
    const { rating, comment } = req.body;

    await service.createReview(movieId, userId, rating, comment);

    res.status(200).send("Created review successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  getMovies,
  getMovieById,
  getTopRatedMovies,
  getRandomMovies,
  createReview,
};
