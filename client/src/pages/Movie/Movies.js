import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { RiMovie2Line } from "react-icons/ri";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
import toast from "react-hot-toast";

import Loader from "../../components/Notifications/Loader";
import Layout from "../../components/Layout";
import Filters from "./components/Filters";
import Movie from "../../components/Movie";
import {
  LanguageData,
  RatesData,
  TimesData,
  YearData,
} from "../../utils/filters";
import { getCategories } from "../../services/category.service";
import { getMovies } from "../../services/movie.service";

const Movies = () => {
  const { search } = useParams();
  const [loadMovies, setLoadMovies] = useState(false);
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({ title: "All Categories" });
  const [year, setYear] = useState(YearData[0]);
  const [times, setTimes] = useState(TimesData[0]);
  const [rates, setRates] = useState(RatesData[0]);
  const [language, setLanguage] = useState(LanguageData[0]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [count, setCount] = useState(0);

  const queries = useMemo(() => {
    const query = {
      category: category?.title === "All Categories" ? "" : category?._id,
      time: times?.title.replace(/\D/g, ""),
      language: language?.title === "Sort By Language" ? "" : language?.title,
      rate: rates?.title.replace(/\D/g, ""),
      year: year?.title.replace(/\D/g, ""),
      search: search ? search : "",
    };
    return query;
  }, [category, times, language, rates, year, search]);

  const sameClass =
    "text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain";
  const datas = {
    categories: categories,
    category: category,
    setCategory: setCategory,
    language: language,
    setLanguage: setLanguage,
    rates: rates,
    setRates: setRates,
    times: times,
    setTimes: setTimes,
    year: year,
    setYear: setYear,
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const getCategoriesData = async () => {
    setLoadMovies(true);
    try {
      const response = await getCategories();

      const data = response.data;

      setCategories(data.categories);
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setLoadMovies(false);
  };

  const getMoviesData = async () => {
    setLoadMovies(true);
    try {
      const response = await getMovies({ ...queries, page, limit: 8 });

      const data = response.data;

      setMovies(data.movies);
      setTotalPages(data.totalPages);
      setCount(data.count);
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setLoadMovies(false);
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  useEffect(() => {
    getMoviesData();
  }, [queries, page]);

  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Filters data={datas} />
        <p className="text-lg font-medium my-6">
          Total <span className="font-bold text-subMain">{count}</span> Items
          Found {search && `for "${search}"`}
        </p>
        {loadMovies ? (
          <div className="w-full gap-6 flex-colo min-h-screen">
            <Loader />
          </div>
        ) : movies?.length > 0 ? (
          <>
            <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
              {movies.map((movie, index) => (
                <Movie key={index} movie={movie} />
              ))}
            </div>
            {/* Loading More */}
            <div className="w-full flex-rows gap-6 md:my-20 my-10">
              <button
                onClick={prevPage}
                disabled={page === 1}
                className={sameClass}
              >
                <TbPlayerTrackPrev className="text-xl" />
              </button>
              <button
                onClick={nextPage}
                disabled={page === totalPages}
                className={sameClass}
              >
                <TbPlayerTrackNext className="text-xl" />
              </button>
            </div>
          </>
        ) : (
          <div className="w-full gap-6 flex-colo min-h-screen">
            <div className="w-24 h-24 p-5 rounded-full mb-4 bg-dry text-subMain text-4xl flex-colo">
              <RiMovie2Line />
            </div>
            <p className="text-border text-sm">
              It seem's like we dont have any movie
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Movies;
