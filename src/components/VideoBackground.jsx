import { useSelector } from "react-redux";
import useVideoTrailer from "../hooks/useVideoTrailer";

const VideoBackground = ({ id }) => {

    const trailerDataFromStore = useSelector(state => state?.movies?.trailerData)

    useVideoTrailer(id)

    return (
        <div className="relative w-screen h-screen">
            <iframe
                className="relative top-0 left-0 w-screen h-screen"
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
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-black"></div>
        </div>
    );
};

export default VideoBackground;
