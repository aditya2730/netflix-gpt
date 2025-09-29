import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="flex-shrink-0 w-36 md:w-48 transform transition-transform duration-300 hover:scale-110 cursor-pointer hover:z-10">
      <img
        src={`${IMG_CDN_URL}${posterPath}`}
        alt="Movie Poster"
        className="w-full h-auto rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-300"
        loading="lazy"
      />
    </div>
  );
};

export default MovieCard;
