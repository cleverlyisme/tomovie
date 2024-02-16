import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import NotFound from "../pages/NotFound/NotFound";
import Movies from "../pages/Movie/Movies";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;
