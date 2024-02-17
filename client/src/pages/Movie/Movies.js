import { useState } from "react";
import { CgSpinner } from "react-icons/cg";

import Layout from "../../components/Layout";
import Filters from "./components/Filters";
import Movie from "../../components/Movie";
import movies from "../../data/movies";

const Movies = () => {
  const totalPages = 6;
  const [page, setPage] = useState(totalPages);

  const handleLoadMore = () => {
    setPage(page + totalPages);
  };

  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Filters />
        <p className="text-lg font-medium my-6">
          Total <span className="font-bold text-subMain">{movies.length}</span>{" "}
          items found
        </p>
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {movies.slice(0, page)?.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>

        {/* Load More */}
        <div className="w-full flex-colo md_my-20 my-10">
          <button
            onClick={handleLoadMore}
            className="flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain"
          >
            Loading More <CgSpinner className="animate-spin" />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Movies;
