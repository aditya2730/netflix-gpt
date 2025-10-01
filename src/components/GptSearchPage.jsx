import { BG_IMG_URL } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSearchMovieSuggestions from "./GptSearchMovieSuggestions";

const GptSearchPage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Fluid background */}
      <div className="absolute">
        <img className="h-screen w-screen" src={BG_IMG_URL} alt="background" />
        <div className="absolute inset-0"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      {/* Foreground content */}
      <div className="flex flex-col items-center pt-32 px-6">
        <GptSearchBar />
        <div className="mt-10 w-full">
          <GptSearchMovieSuggestions />
        </div>
      </div>
    </div>
  );
};

export default GptSearchPage;
