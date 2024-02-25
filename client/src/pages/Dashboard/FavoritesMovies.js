import { useEffect, useState } from "react";
import FileSaver from "file-saver";
import toast from "react-hot-toast";

import useAppContext from "../../hooks/useAppContext";
import Table from "../../components/MoviesTable";
import SideBar from "./components/SideBar";
import Loader from "../../components/Notifications/Loader";
import { DownloadVideo } from "../../utils/functionalities";
import { Empty } from "../../components/Notifications/Empty";
import { deleteLikedMovies, getLikedMovies } from "../../services/user.service";

const FavoritesMovies = () => {
  const {
    loadingState: { setIsLoading, isDeleting, setIsDeleting },
  } = useAppContext();
  const [loadMovies, setLoadMovies] = useState(false);
  const [likedMovies, setLikedMovies] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleDeleteAllMovie = async () => {
    setIsDeleting(true);
    try {
      const confirm = window.confirm(
        "Are you sure you want to remove all your favorites?"
      );

      if (confirm) {
        await deleteLikedMovies();

        setLikedMovies([]);
        toast.success("Movies removed from your favorites successfully");
      }
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setIsDeleting(false);
  };

  const handleDownloadVideo = async (videoUrl, name) => {
    setIsLoading(true);
    try {
      await DownloadVideo(videoUrl, setProgress).then((data) => {
        setProgress(0);
        FileSaver.saveAs(data, name);
      });

      toast.success("Downloaded movie successfully");
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setIsLoading(false);
  };

  const getData = async () => {
    setLoadMovies(true);
    try {
      const response = await getLikedMovies();

      const movies = response.data.movies;

      setLikedMovies(movies);
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setLoadMovies(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Favorites Movies</h2>
          {likedMovies?.length > 0 && (
            <button
              disabled={isDeleting}
              onClick={handleDeleteAllMovie}
              className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded"
            >
              {isDeleting ? "Deleting..." : "Delete All"}
            </button>
          )}
        </div>
        {loadMovies ? (
          <Loader />
        ) : likedMovies.length > 0 ? (
          <Table
            data={likedMovies}
            admin={false}
            downloadVideo={handleDownloadVideo}
            progress={progress}
          />
        ) : (
          <Empty message="You have no favorites movies" />
        )}
      </div>
    </SideBar>
  );
};

export default FavoritesMovies;
