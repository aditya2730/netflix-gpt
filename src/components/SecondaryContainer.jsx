import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movieData = useSelector((store) => store.movies);

  return (
    <div className="relative -mt-56 px-6 md:px-12 space-y-16">
      <MovieList title="Now Playing" movies={movieData.nowPlayingMovies} />
      <MovieList title="Top Rated" movies={movieData.popularMovies} />
      <MovieList title="Upcoming" movies={movieData.topRatedMovies} />
      <MovieList title="Popular" movies={movieData.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
