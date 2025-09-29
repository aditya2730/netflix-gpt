const VideoTitle = ({ title, overview }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl md:text-4xl font-extrabold leading-tight drop-shadow-2xl">
        {title}
      </h1>
      <p className="text-base md:text-lg text-gray-300 max-w-xl line-clamp-3">
        {overview}
      </p>
      <div className="flex items-center gap-4 mt-6">
        <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-300 transition duration-300">
          ▶ Play
        </button>
        <button className="flex items-center gap-2 bg-gray-700/70 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-600 transition duration-300">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
