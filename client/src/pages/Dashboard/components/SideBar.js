import { NavLink } from "react-router-dom";
import { BsFillGridFill } from "react-icons/bs";
import { FaHeart, FaUsers } from "react-icons/fa";
import { RiLockPasswordLine, RiMovie2Fill } from "react-icons/ri";
import { HiViewGridAdd } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

import Layout from "../../../components/Layout";

const SideBar = ({ children }) => {
  const navs = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: BsFillGridFill,
    },
    {
      name: "Movies",
      path: "/admin/movies",
      icon: RiMovie2Fill,
    },
    {
      name: "Categories",
      path: "/admin/categories",
      icon: HiViewGridAdd,
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: FaUsers,
    },
    {
      name: "Update Profile",
      path: "/profile",
      icon: FiSettings,
    },
    {
      name: "Favorite Movies",
      path: "/favorites",
      icon: FaHeart,
    },
    {
      name: "Change Password",
      path: "/change-password",
      icon: RiLockPasswordLine,
    },
  ];

  const active = "bg-dryGray text-subMain";
  const hover = "hover:text-white hover:bg-main";
  const inActive =
    "rounded font-medium text-sm transitions flex gap-3 items-center p-4";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;

  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2">
        <div className="xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6">
          <div className="col-span-2 sticky bg-dry border border-gray-800 p-6 rounded-md xl:mb-0 mb-5">
            {navs.map((nav, index) => (
              <NavLink key={index} to={nav.path} className={Hover}>
                <nav.icon /> <p>{nav.name}</p>
              </NavLink>
            ))}
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="10"
            data-aos-offset="200"
            className="col-span-6 rounded-md bg-dry border border-gray-800 p-6"
          >
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SideBar;
