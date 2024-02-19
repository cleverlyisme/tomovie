import { useState } from "react";
import { useParams } from "react-router-dom";
import { BsCollectionFill } from "react-icons/bs";

import movies from "../../data/movies";
import Layout from "../../components/Layout";
import MovieInfor from "./components/MovieInfor";
import MovieCasts from "./components/MovieCasts";
import MovieRates from "./components/MovieRates";
import Titles from "../../components/Titles";
import Movie from "../../components/Movie";
import ShareMovieModal from "../../components/Modals/ShareMovieModal";

const MovieDetail = () => {
  const [openModal, setOpenModal] = useState(false);

  const { id } = useParams();

  const movie = movies.find((movie) => movie._id === id);

  const relatedMovies = movies.filter((m) => m.category === movie.category);

  return (
    <Layout>
      <ShareMovieModal open={openModal} setOpen={setOpenModal} movie={movie} />
      <MovieInfor movie={movie} setOpenModal={setOpenModal} />
      <div className="container mx-auto min-h-screen px-2 my-6">
        <MovieCasts casts={movie?.casts} />
        <MovieRates movie={movie} />
        <div className="my-16">
          <Titles title="Related Movies" Icon={BsCollectionFill} />
          <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {relatedMovies.map((movie, index) => (
              <Movie key={index} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetail;
