import Layout from "../../components/Layout";
import Banner from "./components/Banner";
import PopularMovies from "./components/PopularMovies";
import Promos from "./components/Promos";
import TopRated from "./components/TopRated";

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-2 mb-6">
        <Banner />
        <PopularMovies />
        <Promos />
        <TopRated />
      </div>
    </Layout>
  );
};

export default Home;
