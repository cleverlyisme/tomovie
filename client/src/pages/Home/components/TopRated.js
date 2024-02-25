import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaHeart } from "react-icons/fa";
import {
  BsBookmarkStarFill,
  BsCaretLeftFill,
  BsCaretRightFill,
} from "react-icons/bs";
import toast from "react-hot-toast";

import useAppContext from "../../../hooks/useAppContext";
import Titles from "../../../components/Titles";
import Rating from "../../../components/Rating";
import { getTopRatedMovies } from "../../../services/movie.service";
import { addFavorite } from "../../../services/user.service";

const TopRated = () => {
  const {
    loadingState: { setIsLoading },
  } = useAppContext();
  const [movies, setMovies] = useState([]);
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);

  const classNames =
    "hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white";

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };

  const handleAddFavorite = async (movieId) => {
    try {
      await addFavorite({ movieId });

      toast.success("Movie added to your favorites");
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await getTopRatedMovies();

      const data = response.data;

      setMovies(data.movies);
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="my-16">
      <Titles title="Top Rated" Icon={BsBookmarkStarFill} />
      <div className="mt-10">
        <Swiper
          navigation={{ nextEl, prevEl }}
          slidesPerView={1}
          spaceBetween={40}
          autoplay={true}
          speed={1000}
          loop={true}
          modules={[Navigation, Autoplay]}
          breakpoints={breakpoints}
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden">
                <img
                  src={movie?.titleImage}
                  alt={movie?.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0">
                  <button
                    className="w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white"
                    onClick={() => handleAddFavorite(movie?._id)}
                  >
                    <FaHeart />
                  </button>
                  <Link
                    to={`/movies/${movie._id}`}
                    className="font-semibold text-xl trancuted line-clamp-1"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {movie?.name}
                  </Link>
                  <div className="flex gap-2 text-star">
                    <Rating value={movie?.rate} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full px-1 flex-rows gap-6 pt-12">
          <button className={classNames} ref={(node) => setPrevEl(node)}>
            <BsCaretLeftFill />
          </button>
          <button className={classNames} ref={(node) => setNextEl(node)}>
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
