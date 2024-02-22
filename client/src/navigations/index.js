import { Routes, Route, Navigate } from "react-router-dom";

import useAppContext from "../hooks/useAppContext.js";

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
import PrivateRoutes from "./PrivateRoutes";

const Navigation = () => {
  const {
    authState: { user, isInitialized },
  } = useAppContext();

  if (!isInitialized) return null;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/profile" replace />}
      />
      <Route
        path="/register"
        element={!user ? <Register /> : <Navigate to="/profile" replace />}
      />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/search/:search" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieDetail />} />
      <Route path="/watch/:id" element={<Watch />} />
      <Route
        path="/profile"
        element={user ? <Profile /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/change-password"
        element={user ? <ChangePassword /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/favorites"
        element={user ? <FavoritesMovies /> : <Navigate to="/login" replace />}
      />
      {user?.role === "Admin" && (
        <Route path="/admin/*" element={<PrivateRoutes />} />
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;
