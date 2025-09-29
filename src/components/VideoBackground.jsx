import useFetchMovieVideo from "../utils/useFetchMovieVideo";

const VideoBackground = ({ movie_id }) => {
  const data = useFetchMovieVideo(movie_id);
  const trailerData = data?.results?.filter((item) => item.type === "Trailer");

  if (!trailerData || trailerData.length === 0) return null;
  const trailer = trailerData[0];

  return (
    <div className="absolute top-0 left-0 w-screen h-screen z-0 overflow-hidden">
      <iframe
        className="w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1`}
        title="Netflix-style trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
