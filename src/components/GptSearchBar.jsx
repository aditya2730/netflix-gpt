import { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_KEY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieSuggestionResults } from "../store/gptSearchSlice";
import GptSearchMovieSuggestions from "./GptSearchMovieSuggestions";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const API_KEY = GEMINI_KEY;
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

  const handleSubmit = async () => {
    const query =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 8 movies, comma seperated like the example result given ahead. Example Result: Gadar,Sholay,Don,Golmaal,Koi Mil Gaya";
    const result = await model.generateContent(query);
    const movieSuggestionResults = result.response.text().split(",");
    dispatch(addMovieSuggestionResults(movieSuggestionResults));
  };

  return (
    <div>
      <div className="pt-[10%] flex justify-center absolute w-full px-4 ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-3xl flex flex-col sm:flex-row items-center bg-black/70 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 transition-all duration-300 hover:shadow-red-600/40 p-4"
        >
          <input
            ref={searchText}
            type="text"
            className="flex-1 p-4 mb-4 sm:mb-0 sm:mr-4 bg-white text-gray-900 rounded-lg text-lg focus:outline-none focus:ring-4 focus:ring-red-500/50 shadow-inner transition-all duration-200 placeholder-gray-500 w-full"
            placeholder="What would you like to watch today?"
          />
          <button
            type="submit"
            className="w-full sm:w-auto py-3 px-6 bg-red-600 text-white rounded-lg cursor-pointer hover:scale-115 hover:bg-red-700 transition-transform duration-300 font-semibold text-lg"
            onClick={handleSubmit}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
