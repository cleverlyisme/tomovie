import api from "./api";

export const getInfo = () => api.get("/users/me");

export const getUsers = () => api.get("/users/all");

export const getLikedMovies = () => api.get("/users/favorites");

export const addFavorite = (data) => api.post("/users/favorites", data);

export const deleteLikedMovie = (id) => api.delete(`/users/favorites/${id}`);

export const deleteLikedMovies = () => api.delete("/users/favorites");

export const updateProfile = (data) => api.put("/users/profile", data);

export const changePassword = (data) => api.put("/users/change-password", data);

export const deleteProfile = () => api.delete("/users/profile");

export const deleteUser = (id) => api.delete(`/users/${id}`);
