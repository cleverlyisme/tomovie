import api from "./api";

export const getInfo = () => api.get("/users/me");
