import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
    return (
        <div className="relative py-6 mx-6 px-10 overflow-x-scroll scrollbar-hide">
            <h1 className="text-3xl py-3 z-10">{title}</h1>
            <div className="flex relative z-10">
                <div className="flex space-x-6">
                    {movies?.map((movie) => (
                        <MovieCard
                            key={movie?.id}
                            imgData={movie?.poster_path}
                            className="w-44 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                        />
                    ))}
                </div>
            </div>
        </div>
    )

}

export default MovieList