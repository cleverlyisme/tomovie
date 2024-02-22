import api from "./api";

export const login = async (data) => api.post("/auth/login", data);

export const register = (data) => api.post("/auth/register", data);
