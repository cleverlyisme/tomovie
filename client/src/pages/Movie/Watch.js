import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { FaCloudDownloadAlt, FaHeart, FaPlay } from "react-icons/fa";
import toast from "react-hot-toast";
import FileSaver from "file-saver";

import useAppContext from "../../hooks/useAppContext";
import Layout from "../../components/Layout";
import { getMovieById } from "../../services/movie.service";
import { DownloadVideo } from "../../utils/functionalities";
import { addFavorite } from "../../services/user.service";

const Watch = () => {
  const {
    loadingState: { setIsLoading },
  } = useAppContext();
  const [play, setPlay] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleAddFavorite = async (movieId) => {
    setIsLoading(true);
    try {
      await addFavorite({ movieId: id });

      toast.success("Movie added to your favorites");
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setIsLoading(false);
  };

  const handleDownloadVideo = async () => {
    setIsLoading(true);
    try {
      await DownloadVideo(movie?.video, setProgress).then((data) => {
        setProgress(0);
        FileSaver.saveAs(data, movie?.name);
      });

      toast.success("Downloaded movie successfully");
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setIsLoading(false);
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await getMovieById(id);

      const data = response.data;

      setMovie(data.movie);
    } catch (err) {
      toast.error(err?.response?.data || err.message);
      navigate("/");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto bg-dry p-6 mb-12">
        <div className="flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6">
          <Link
            to={`/movies/${movie?._id}`}
            className="md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray"
          >
            <BiArrowBack /> {movie?.name}
          </Link>
          <div className="flex-btn sm:w-auto w-full gap-5">
            <button
              className="bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-4 py-3 text-sm"
              onClick={handleAddFavorite}
            >
              <FaHeart />
            </button>
            <button
              className="bg-subMain flex-rows gap-2 hover:text-main transitions text-white rounded px-8 py-3 font-medium text-sm"
              onClick={handleDownloadVideo}
            >
              <FaCloudDownloadAlt /> Download
            </button>
          </div>
        </div>

        {/* Watch Video */}
        {play ? (
          <video controls autoPlay={play} className="w-full h-full rounded">
            <source src={movie?.video} type="video/mp4" title={movie?.name} />
          </video>
        ) : (
          <div className="w-full h-screen rounded-lg overflow-hidden relative">
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo">
              <button
                onClick={() => setPlay(true)}
                className="bg-white text-subMain flex-colo border border-subMain rounded-full w-20 h-20 font-medium text-xl"
              >
                <FaPlay />
              </button>
            </div>
            <img
              src={movie?.image || "/assets/images/movies/black.png"}
              alt={movie?.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Watch;
