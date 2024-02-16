import { BsCollectionFill } from "react-icons/bs";

import movies from "../../../data/movies";
import Titles from "../../../components/Titles";
import Movie from "../../../components/Movie";

const PopularMovies = () => {
  return (
    <div className="my-16">
      <Titles title="Popular Movies" Icon={BsCollectionFill} />
      <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {movies.slice(0, 8).map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
