import { useNavigate } from "react-router-dom";
import { HiPlusCircle } from "react-icons/hi";

import movies from "../../../data/movies";
import Table from "../../../components/MoviesTable";
import SideBar from "../components/SideBar";

const Movies = () => {
  const navigate = useNavigate();

  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Movies List</h2>
          <button
            className="bg-subMain flex-rows gap-4 font-medium transitions hover:bg-main border border-subMain text-white py-2 px-4 rounded"
            onClick={() => navigate("/admin/movies/create")}
          >
            <HiPlusCircle /> Create
          </button>
        </div>

        <Table data={movies} role={"Admin"} />
      </div>
    </SideBar>
  );
};

export default Movies;
