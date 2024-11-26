import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {
    const movies = useSelector((state) => state.movies?.nowPlayingMovies)
    if (!movies) return

    const mainMovie = movies[4]

    return (
        <div>
            <VideoBackground id={mainMovie?.id} />
            <VideoTitle title={mainMovie?.title} overview={mainMovie?.overview} />
        </div>
    )
}

export default MainContainer