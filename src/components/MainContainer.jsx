import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.topRatedMovies);
  if (!movies) return null;

  const mainMovie = movies[15];
  const { title, overview, id } = mainMovie;

  return (
    <div className="relative w-screen h-screen">
      <VideoBackground movie_id={id} />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
      <div className="absolute top-1/3 left-6 md:left-16 z-10 max-w-2xl text-white">
        <VideoTitle title={title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
