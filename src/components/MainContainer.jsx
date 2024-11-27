import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"

const MainContainer = () => {
    const movies = useSelector((state) => state.movies?.nowPlayingMovies)
    if (!movies) return

    const mainMovie = movies[6]

    return (

        <VideoBackground id={mainMovie?.id} title={mainMovie?.title} overview={mainMovie?.overview} />

    )
}

export default MainContainer