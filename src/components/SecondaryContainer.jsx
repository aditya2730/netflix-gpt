import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store?.movies);

    return (
        <div className="bg-black min-h-screen px-4 md:px-8 py-6 text-white -mt-80">
            <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
            <MovieList title="Popular" movies={movies?.popularMovies} />
            <MovieList title="Upcoming" movies={movies?.topRatedMovies} />
            <MovieList title="Trending" movies={movies?.upcomingMovies} />
        </div>
    );
};

export default SecondaryContainer;
