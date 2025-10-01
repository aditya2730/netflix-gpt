/* eslint-disable react-hooks/exhaustive-deps */
import { API_OPTIONS } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addMovieSuggestionResultsData } from "../store/gptSearchSlice";

const useFetchGptMovieSuggestions = () => {
  const dispatch = useDispatch();
  const finalMovieSuggestionResulst = [];
  const movieSuggestionResults = useSelector(
    (store) => store.gptSearch.movieSuggestionResults
  );

  const searchMovieSuggestions = async (movie) => {
    try {
      const encodedMovie = encodeURIComponent(movie);
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodedMovie}&include_adult=false&language=en-US`,
        API_OPTIONS
      );
      const json = await res.json();
      return json.results;
    } catch (error) {
      console.error("TMDB fetch error:", error);
    }
  };

  useEffect(() => {
    if (!movieSuggestionResults || movieSuggestionResults.length === 0) return;

    const fetchMovieSuggestionsData = async () => {
      const results = await Promise.all(
        movieSuggestionResults.map((movie) => searchMovieSuggestions(movie))
      );
      return results;
    };

    fetchMovieSuggestionsData().then((res) => {
      res.forEach((movieResults) => {
        finalMovieSuggestionResulst.push(movieResults[0]);
      });
      dispatch(addMovieSuggestionResultsData(finalMovieSuggestionResulst));
    });
  }, [movieSuggestionResults]);
};

export default useFetchGptMovieSuggestions;
