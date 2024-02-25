import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsCollectionFill } from "react-icons/bs";
import { RiMovie2Line } from "react-icons/ri";
import toast from "react-hot-toast";

import useAppContext from "../../hooks/useAppContext";
import Layout from "../../components/Layout";
import MovieInfor from "./components/MovieInfor";
import MovieCasts from "./components/MovieCasts";
import MovieRates from "./components/MovieRates";
import Titles from "../../components/Titles";
import Movie from "../../components/Movie";
import ShareMovieModal from "../../components/Modals/ShareMovieModal";
import { getMovieById, getRelatedMovies } from "../../services/movie.service";

const MovieDetail = () => {
  const {
    loadingState: { setIsLoading },
  } = useAppContext();
  const [openModal, setOpenModal] = useState(false);
  const [movie, setMovie] = useState(null);
  const [relatedMovies, setRelatedMovies] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  const getData = async () => {
    setIsLoading(true);
    try {
      const responseMovie = await getMovieById(id);
      const responseMovies = await getRelatedMovies(id);

      const dataMovie = responseMovie.data;
      const dataMovies = responseMovies.data;

      setMovie(dataMovie.movie);
      setRelatedMovies(dataMovies.movies.filter((m) => m._id !== id));
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <Layout>
      <ShareMovieModal open={openModal} setOpen={setOpenModal} movie={movie} />
      <MovieInfor movie={movie} setOpenModal={setOpenModal} />
      <div className="container mx-auto min-h-screen px-2 my-6">
        <MovieCasts casts={movie?.casts || []} />
        <MovieRates movie={movie} setMovie={setMovie} />
        <div className="my-16">
          <Titles title="Related Movies" Icon={BsCollectionFill} />
          {relatedMovies?.length > 0 ? (
            <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
              {relatedMovies.map((movie, index) => (
                <Movie key={index} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="w-full gap-6 flex-colo p-10">
              <div className="w-24 h-24 p-5 rounded-full mb-4 bg-dry text-subMain text-4xl flex-colo">
                <RiMovie2Line />
              </div>
              <p className="text-border text-sm">
                It seem's like we dont have any related movies
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetail;
