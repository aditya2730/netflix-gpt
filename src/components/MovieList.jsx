import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
    return (
        <div>
            <div className="flex">
                <h1>{title}</h1>
                <div className="flex">
                    {movies.map((movie) => <MovieCard imgData={movie?.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList