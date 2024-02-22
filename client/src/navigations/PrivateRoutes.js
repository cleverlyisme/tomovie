import { Routes, Route } from "react-router-dom";

import ScrollOnTop from "../components/ScrollOnTop";
import Dashboard from "../pages/Dashboard";
import Movies from "../pages/Dashboard/Admin/Movies";
import Categories from "../pages/Dashboard/Admin/Categories";
import Users from "../pages/Dashboard/Admin/Users";
import NotFound from "../pages/NotFound/NotFound";
import MovieDetail from "../pages/Dashboard/Admin/MovieDetail";

const PrivateRoutes = () => {
  return (
    <ScrollOnTop>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/users" element={<Users />} />
        <Route path="/movies/create" element={<MovieDetail />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ScrollOnTop>
  );
};

export default PrivateRoutes;
