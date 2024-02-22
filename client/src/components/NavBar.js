import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaSearch, FaHeart } from "react-icons/fa";
import { CgUser } from "react-icons/cg";

import useAppContext from "../hooks/useAppContext";
import { getLikedMovies } from "../services/user.service";

const NavBar = () => {
  const {
    loadingState: { setIsLoading },
    authState: { user },
  } = useAppContext();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [likedMovies, setLikedMovies] = useState([]);

  const menus = [
    { text: "Movies", path: "/movies" },
    { text: "About Us", path: "/about-us" },
    { text: "Contact Us", path: "/contact-us" },
  ];
  const hover = "hover:text-subMain transitions text-white relative";
  const Hover = ({ isActive }) => (isActive ? "text-subMain relative" : hover);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/movies/search/${search}`);
      setSearch(search);
    } else {
      navigate(`/movies`);
    }
  };

  const loadLikedMovies = async () => {
    setIsLoading(true);
    try {
      const likedMovies = await getLikedMovies();

      setLikedMovies(likedMovies);
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (user) loadLikedMovies();
  }, []);

  return (
    <div className="bg-main shadow-md sticky top-0 z-20">
      <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
        {/* Logo */}
        <div className="col-span-1 lg:block hidden">
          <Link to="/">
            <img
              src="/assets/images/logo.png"
              alt="logo"
              className="w-full h-20 object-contain"
            />
          </Link>
        </div>
        {/* search Form */}
        <div className="col-span-3">
          <form
            onSubmit={handleSearch}
            className="w-full text-sm bg-dryGray rounded flex-btn gap-4"
          >
            <button
              type="submit"
              className="bg-subMain w-12 flex-colo h-12 rounded text-white"
            >
              <FaSearch />
            </button>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Movie Name From Here"
              className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black"
            />
          </form>
        </div>
        {/* menus */}
        <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
          {menus.map((menu, index) => (
            <NavLink key={index} to={menu.path} className={Hover}>
              {menu.text}
            </NavLink>
          ))}
          <NavLink
            to={
              user?.role === "Admin"
                ? "/admin/dashboard"
                : user
                ? "/profile"
                : "/login"
            }
            className={Hover}
          >
            {user ? (
              <img
                src={user?.image || "/assets/images/avatar.png"}
                alt={user?.fullName}
                className="w-8 h-8 rounded-full border object-cover border-subMain"
              />
            ) : (
              <CgUser className="w-8 h-8" />
            )}
          </NavLink>
          <NavLink to="/favorites" className={`${Hover} relative`}>
            <FaHeart className="w-6 h-6" />
            <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-2 -right-3">
              {likedMovies?.length || 0}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
