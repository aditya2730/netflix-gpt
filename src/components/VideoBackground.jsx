import { useSelector } from "react-redux";
import useVideoTrailer from "../hooks/useVideoTrailer";
import VideoTitle from "./VideoTitle";

const VideoBackground = ({ id, title, overview }) => {
    const trailerDataFromStore = useSelector((state) => state?.movies?.trailerData);

    useVideoTrailer(id);

    return (
        <div className="relative w-auto h-screen bg-black">
            <iframe
                className="absolute inset-0 w-full h-full "
                src={
                    "https://www.youtube.com/embed/" +
                    trailerDataFromStore?.key +
                    "?autoplay=1&mute=1&loop=1&playlist=" +
                    trailerDataFromStore?.key +
                    "&cc_load_policy=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3"
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black"></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white">
                <VideoTitle title={title} overview={overview} />
            </div>
        </div>
    );
};

export default VideoBackground;
