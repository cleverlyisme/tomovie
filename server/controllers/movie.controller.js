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

    const movies = await service.getMovies({
      filters,
      page,
      limit,
    });

    res.status(200).send(movies);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { getMovies };
