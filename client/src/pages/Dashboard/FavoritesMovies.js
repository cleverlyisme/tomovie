import movies from "../../data/movies";
import Table from "../../components/MoviesTable";
import SideBar from "./components/SideBar";

const FavoritesMovies = () => {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Favorites Movies</h2>
          <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded">
            Delete All
          </button>
        </div>

        <Table data={movies} role={"Admin"} />
      </div>
    </SideBar>
  );
};

export default FavoritesMovies;
