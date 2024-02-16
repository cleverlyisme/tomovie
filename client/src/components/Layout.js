import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="bg-main text-white">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
