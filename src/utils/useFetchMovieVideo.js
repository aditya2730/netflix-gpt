/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { API_OPTIONS } from "./constants";

const useFetchMovieVideo = (id) => {
  const [videoData, setVideoData] = useState(null);

  const getMovieVideo = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      setVideoData(json);
    } catch (error) {
      console.error("error fetching movie video", error);
    }
  };

  useEffect(() => {
    getMovieVideo(id);
  }, [id]);

  return videoData;
};

export default useFetchMovieVideo;
