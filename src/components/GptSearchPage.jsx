import { BG_IMG_URL } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div>
      <img className="absolute" src={BG_IMG_URL} alt="background_img" />
      <GptSearchBar />
    </div>
  );
};

export default GptSearchPage;
