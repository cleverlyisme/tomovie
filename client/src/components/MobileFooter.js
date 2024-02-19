import { NavLink } from "react-router-dom";
import { BsCollectionPlay } from "react-icons/bs";
import { FaHeart, FaUser } from "react-icons/fa";
import { CgMenuBoxed } from "react-icons/cg";

import useDrawer from "../hooks/useDrawer";
import MenuDrawer from "./Drawer/MenuDrawer";

const MobileFooter = () => {
  const { mobileDrawer, toggleDrawer } = useDrawer();

  const active = "bg-white text-main";
  const inActive =
    "transitions text-2xl flex-colo hover:bg-white hover:text-main rounded-md px-4 py-3";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : inActive;

  return (
    <>
      <div className="flex-btn h-full bg-white rounded cursor-pointer overflow-y-scroll flex-grow w-full">
        <MenuDrawer drawerOpen={mobileDrawer} toggleDrawer={toggleDrawer} />
      </div>
      <footer className="lg:hidden fixed z-50 bottom-0 w-full px-1">
        <div className="bg-dry rounded-md flex-btn w-full p-1">
          <NavLink to="/movies" className={Hover}>
            <BsCollectionPlay />
          </NavLink>
          <NavLink to="/favorites" className={Hover}>
            <FaHeart />
          </NavLink>
          <NavLink to="/login" className={Hover}>
            <FaUser />
          </NavLink>
          <button className={inActive} onClick={toggleDrawer}>
            <CgMenuBoxed />
          </button>
        </div>
      </footer>
    </>
  );
};

export default MobileFooter;
