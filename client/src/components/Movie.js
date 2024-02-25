import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { addFavorite } from "../services/user.service";

const Movie = ({ movie }) => {
  const navigate = useNavigate();

  const handleAddFavorite = async (movieId) => {
    try {
      await addFavorite({ movieId });

      toast.success("Movie added to your favorites");
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
  };

  return (
    <div className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden">
      <div
        onClick={() => {
          navigate(`/movies/${movie?._id}`);
          window.scrollTo(0, 0);
        }}
        className="w-full cursor-pointer"
      >
        <img
          src={movie?.image}
          alt={movie?.name}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
        <h3 className="font-semibold truncate">{movie?.name}</h3>
        <button
          className="h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain rounded-md bg-subMain text-white"
          onClick={() => handleAddFavorite(movie?._id)}
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default Movie;
