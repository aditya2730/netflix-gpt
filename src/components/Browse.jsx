import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usefetchMovies from "../utils/useFetchMovies";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../store/movieSlice";

const Browse = () => {
  usefetchMovies("now_playing", addNowPlayingMovies);
  usefetchMovies("popular", addPopularMovies);
  usefetchMovies("top_rated", addTopRatedMovies);
  usefetchMovies("upcoming", addUpcomingMovies);

  return (
    <div className="relative bg-black text-white overflow-y-scroll h-screen [scrollbar-width:none] [-ms-overflow-style:none]">
      {/* 🔥 Header */}
      <Header />

      {/* 🎬 Hero section */}
      <MainContainer />

      {/* 🍿 Movie lists overlapping hero */}
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
