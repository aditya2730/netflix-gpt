import useFetchMovieVideo from "../utils/useFetchMovieVideo";

const VideoBackground = ({ movie_id }) => {
  const data = useFetchMovieVideo(movie_id);
  const trailerData = data?.results?.filter((item) => item.type === "Trailer");

  if (!trailerData || trailerData.length === 0) return null;
  const trailer = trailerData[0];

  return (
    <div className="top-0 left-0 w-auto h-screen z-0">
      <iframe
        className="absolute top-1/2 left-1/2 w-screen h-screen -translate-x-1/2 -translate-y-1/2"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=${trailer.key}`}
        title="Netflix-style trailer"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
