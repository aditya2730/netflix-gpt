import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useFetchMovies from "../utils/useFetchMovies";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../store/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";
import {
  removeMovieSuggestionResultsData,
  removeMovieSuggestionResults,
} from "../store/gptSearchSlice";

const Browse = () => {
  const dispatch = useDispatch();

  const gptSearchView = useSelector((store) => store.gptSearch.showGptSearch);

  useFetchMovies("now_playing", addNowPlayingMovies);
  useFetchMovies("popular", addPopularMovies);
  useFetchMovies("top_rated", addTopRatedMovies);
  useFetchMovies("upcoming", addUpcomingMovies);

  dispatch(removeMovieSuggestionResultsData());
  dispatch(removeMovieSuggestionResults());

  return (
    <div className="absolute top-0 left-0 w-screen text-white overflow-y-scroll h-screen overflow-hidden bg-black [scrollbar-width:none] [-ms-overflow-style:none]">
      <Header />

      {gptSearchView ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />

          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
