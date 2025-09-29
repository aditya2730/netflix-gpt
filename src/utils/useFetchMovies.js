import { useDispatch } from "react-redux";
import { API_OPTIONS } from "./constants";
import { useEffect } from "react";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../store/movieSlice";

const usefetchMovies = (title, action) => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${title}?page=1`,
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(action(json.results));
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default usefetchMovies;
