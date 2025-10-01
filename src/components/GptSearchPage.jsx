import { BG_IMG_URL } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSearchMovieSuggestions from "./GptSearchMovieSuggestions";

const GptSearchPage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Fluid background */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={BG_IMG_URL}
        alt="background_img"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      {/* Foreground content */}
      <div className="relative z-10">
        <GptSearchBar />
        <GptSearchMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearchPage;
