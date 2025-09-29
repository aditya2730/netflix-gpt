import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);
  if (!movies?.length) return null;

  const scrollByAmount = window.innerWidth > 1024 ? 800 : 500;

  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: scrollByAmount, behavior: "smooth" });

  return (
    <section className="relative group">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
        {title}
      </h2>

      {/* Left arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-3 rounded-full z-20"
      >
        <ChevronLeft className="text-white w-7 h-7" />
      </button>

      {/* Scrollable row (no scrollbars, horizontal only via buttons) */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden overflow-y-hidden scroll-smooth"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>

      {/* Right arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-3 rounded-full z-20"
      >
        <ChevronRight className="text-white w-7 h-7" />
      </button>
    </section>
  );
};

export default MovieList;
