import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.topRatedMovies);
  if (!movies) return null;

  const mainMovie = movies[2];
  const { title, overview, id } = mainMovie;

  return (
    <div className="relative w-full h-screen">
      <VideoBackground movie_id={id} />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      {/* Video Title/buttons */}
      <div className="absolute top-1/3 left-6 md:left-16 z-10 max-w-2xl text-white">
        <VideoTitle title={title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
