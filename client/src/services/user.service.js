import api from "./api";

export const getInfo = () => api.get("/users/me");

export const getLikedMovies = () => api.get("/users/favorites");

export const updateProfile = (data) => api.put("/users/profile", data);

export const changePassword = (data) => api.put("/users/change-password", data);

export const deleteProfile = () => api.delete("/users/profile");
