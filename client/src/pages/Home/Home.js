import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Layout from "../../components/Layout";
import Banner from "./components/Banner";
import PopularMovies from "./components/PopularMovies";
import Promos from "./components/Promos";
import TopRated from "./components/TopRated";
import { getMovies } from "../../services/movie.service";

const Home = () => {
  const [loadMovies, setLoadMovies] = useState(false);
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    setLoadMovies(true);
    try {
      const response = await getMovies({ limit: 8 });

      const data = response.data;

      setMovies(data.movies);
    } catch (err) {
      toast.error(err?.response?.data || err.message);
    }
    setLoadMovies(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-2 mb-6">
        <Banner movies={movies} isLoading={loadMovies} />
        <PopularMovies movies={movies} isLoading={loadMovies} />
        <Promos />
        <TopRated />
      </div>
    </Layout>
  );
};

export default Home;
