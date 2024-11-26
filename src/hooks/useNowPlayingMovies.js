import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing",
          API_OPTIONS
        );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
      } catch (error) {
        throw new Error(error);
      }
    };
    getNowPlayingMovies();
  }, [dispatch]);
};

export default useNowPlayingMovies;
