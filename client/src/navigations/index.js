import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import NotFound from "../pages/NotFound/NotFound";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      {/* <Route path="/products/*" element={<ProductRoute />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;
