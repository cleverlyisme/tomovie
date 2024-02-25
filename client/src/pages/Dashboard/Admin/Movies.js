import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiPlusCircle } from "react-icons/hi";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
import toast from "react-hot-toast";

import useAppContext from "../../../hooks/useAppContext";
import Table from "../../../components/MoviesTable";
import SideBar from "../components/SideBar";
import Loader from "../../../components/Notifications/Loader";
import { deleteMovie, getMovies } from "../../../services/movie.service";
import { Empty } from "../../../components/Notifications/Empty";

const Movies = () => {
  const navigate = useNavigate();
  const {
    loadingState: { setIsLoading },
  } = useAppContext();
  const [loadMovies, setLoadMovies] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const sameClass =
    "text-white p-2 rounded font-semibold border-2 border-subMain hover:bg-subMain";

  const handleDeleteMovie = async (id) => {
    setIsLoading(true);
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this movie?"
      );

      if (confirm) {
        await deleteMovie(id);
        await getData();

        toast.success("Movies deleted successfully");
      }
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setIsLoading(false);
  };

  const nextPage = () => {
    setPage(page + 1 > totalPage ? page : page + 1);
  };

  const prevPage = () => {
    setPage(page - 1 || page);
  };

  const getData = async () => {
    setLoadMovies(true);
    try {
      const response = await getMovies({ page, limit: 8 });

      const data = response.data;

      setMovies(data.movies);
      setTotalPage(data.totalPages);
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setLoadMovies(false);
  };

  useEffect(() => {
    getData();
  }, [page]);

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

        {loadMovies ? (
          <Loader />
        ) : movies?.length > 0 ? (
          <>
            <Table
              data={movies}
              role="Admin"
              onDeleteHandler={handleDeleteMovie}
            />
            {/* Loading More */}
            <div className="w-full flex-rows gap-6 my-5">
              <button
                onClick={prevPage}
                disabled={page === 1}
                className={sameClass}
              >
                <TbPlayerTrackPrev className="text-xl" />
              </button>
              <span className="text-white font-semibold">{page}</span>
              <button
                onClick={nextPage}
                disabled={page === totalPage}
                className={sameClass}
              >
                <TbPlayerTrackNext className="text-xl" />
              </button>
            </div>
          </>
        ) : (
          <Empty message="You have no movies" />
        )}
      </div>
    </SideBar>
  );
};

export default Movies;
