import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browse = () => {
    useNowPlayingMovies()
    return (
        <div className="relative">
            <Header />
            <div>
                <MainContainer />
                <SecondaryContainer />
            </div>
        </div>

    )
}

export default Browse