import Header from "./Header";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="relative bg-black min-h-screen text-white">
      {/* 🔥 Header */}
      <Header />

      {/* 🎬 Hero section */}
      <MainContainer />

      {/* 🍿 Other sections */}
      <div className="relative z-10 bg-black">
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
