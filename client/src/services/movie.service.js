import api from "./api";

export const getMovies = ({
  category,
  time,
  language,
  rate,
  year,
  search,
  page,
  limit,
}) =>
  api.get("/movies", {
    params: { category, time, language, rate, year, search, page, limit },
  });

export const getTopRatedMovies = () => api.get("/movies/rated/top");

export const getRelatedMovies = (id) => api.get(`/movies/related/${id}`);

export const getMovieById = (id) => api.get(`/movies/${id}`);

export const createMovie = (data) => api.post("/movies", data);

export const updateMovie = (id, data) => api.put(`/movies/${id}`, data);

export const createReview = (id, data) =>
  api.post(`/movies/${id}/reviews`, data);

export const deleteMovie = (id) => api.delete(`/movies/${id}`);
