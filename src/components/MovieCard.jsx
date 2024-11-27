import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ imgData }) => {
    return (
        <div className="w-44 h-72 bg-gray-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img
                src={IMG_CDN_URL + imgData}
                alt="Movie Card"
                className="w-full h-full object-cover rounded-lg"
            />
        </div>
    );
};

export default MovieCard;
