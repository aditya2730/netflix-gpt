import { useSelector } from "react-redux";
import useFetchGptMovieSuggestions from "../utils/useFetchGptMovieSuggestions";
import MovieList from "./MovieList";
import ShimmerCard from "./ShimmerCard";

const GptSearchMovieSuggestions = () => {
  useFetchGptMovieSuggestions();
  const { movieSuggestionResultsData, loading } = useSelector(
    (store) => store.gptSearch
  );

  return loading ? (
    <section className="mt-6 w-full">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 px-2">
        🎥 Handpicked by AI – Loading...
      </h2>
      <div className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth px-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <ShimmerCard key={i} />
        ))}
      </div>
    </section>
  ) : movieSuggestionResultsData?.length ? (
    <MovieList
      title="🎥 Handpicked by AI – Must-Watch Picks for You"
      movies={movieSuggestionResultsData}
    />
  ) : null;
};

export default GptSearchMovieSuggestions;
