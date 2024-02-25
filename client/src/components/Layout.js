import ScrollToTop from "react-scroll-to-top";

import NavBar from "./NavBar";
import Footer from "./Footer";
import MobileFooter from "./MobileFooter";

const Layout = ({ children }) => {
  return (
    <div className="bg-main text-white">
      <NavBar />
      {children}
      <Footer />
      <MobileFooter />
      <ScrollToTop smooth />
    </div>
  );
};

export default Layout;
