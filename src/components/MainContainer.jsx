import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;

  const mainMovie = movies[6];
  const { title, overview, id } = mainMovie;

  return (
    <section className="relative w-full h-screen">
      {/* 🎥 Trailer fills full screen */}
      <VideoBackground movie_id={id} />

      {/* 🎨 Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>

      {/* 📜 Title/buttons floating over trailer */}
      <div className="absolute top-1/3 left-6 md:left-16 z-10 max-w-2xl text-white">
        <VideoTitle title={title} overview={overview} />
      </div>
    </section>
  );
};

export default MainContainer;
