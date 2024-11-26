import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerData } from "../utils/moviesSlice";

const useVideoTrailer = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMainContainerVideo = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos`,
          API_OPTIONS
        );

        const jsonData = await data.json();

        const filterData = jsonData?.results.filter(
          (videoResult) => videoResult.type === "Trailer"
        );

        const trailerData = filterData[2];

        dispatch(addTrailerData(trailerData));
      } catch (error) {
        throw new Error(error);
      }
    };
    getMainContainerVideo();
  }, []);
};

export default useVideoTrailer;
