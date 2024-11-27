import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUpcomingMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming",
          API_OPTIONS
        );
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
      } catch (error) {
        throw new Error(error);
      }
    };
    getUpcomingMovies();
  }, [dispatch]);
};

export default useUpcomingMovies;
