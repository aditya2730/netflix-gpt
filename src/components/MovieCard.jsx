import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({ imgData }) => {
    return (
        <div>
            <img src={IMG_CDN_URL + imgData} alt="Movie Card" />
        </div>
    )
}

export default MovieCard