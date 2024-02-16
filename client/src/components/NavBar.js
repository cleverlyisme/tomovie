import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";
import { CgUser } from "react-icons/cg";

const NavBar = () => {
  const menus = [
    { text: "Movies", path: "/movies" },
    { text: "About Us", path: "/about-us" },
    { text: "Contact Us", path: "/contact-us" },
  ];
  const hover = "hover:text-subMain transitions text-white relative";
  const Hover = ({ isActive }) => (isActive ? "text-subMain relative" : hover);

  return (
    <div className="bg-main shadow-md sticky top-0 z-20">
      <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
        <div className="col-span-1 lg:block hidden">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-12 object-contain"
            />
          </Link>
        </div>

        {/* Search Form */}
        <div className="col-span-3">
          <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4">
            <button
              type="submit"
              className="bg-subMain w-12 flex-colo h-12 rounded text-white "
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search movie's name from here"
              className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black"
            />
          </form>
        </div>

        {/* Menu */}
        <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
          {menus.map((menu, index) => (
            <NavLink key={index} to={menu.path} className={Hover}>
              {menu.text}
            </NavLink>
          ))}
          <NavLink to="/login" className={Hover}>
            <CgUser className="w-8 h-8" />
          </NavLink>
          <NavLink to="/favorites" className={Hover}>
            <FaHeart className="w-6 h-6" />
            <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-2 -right-4">
              3
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
