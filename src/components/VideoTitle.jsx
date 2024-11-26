const VideoTitle = ({ title, overview }) => {
    return (
        <div className="relative bottom-96 left-24  text-white z-10 max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl mb-6">{overview}</p>

            {/* Buttons */}
            <div className="flex space-x-4">
                <button className="bg-red-600 px-6 py-2 rounded-lg font-semibold text-lg hover:bg-red-700 transition duration-300">
                    Play
                </button>
                <button className="bg-gray-600 px-6 py-2 rounded-lg font-semibold text-lg hover:bg-gray-700 transition duration-300">
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
