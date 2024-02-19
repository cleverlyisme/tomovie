import { Routes, Route } from "react-router-dom";

import AdminRoute from "./AdminRoute";

import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import NotFound from "../pages/NotFound/NotFound";
import Movies from "../pages/Movie/Movies";
import MovieDetail from "../pages/Movie/MovieDetail";
import Watch from "../pages/Movie/Watch";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Profile from "../pages/Dashboard/Profile";
import ChangePassword from "../pages/Dashboard/ChangePassword";
import FavoritesMovies from "../pages/Dashboard/FavoritesMovies";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieDetail />} />
      <Route path="/watch/:id" element={<Watch />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/favorites" element={<FavoritesMovies />} />
      <Route path="/admin/*" element={<AdminRoute />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;
