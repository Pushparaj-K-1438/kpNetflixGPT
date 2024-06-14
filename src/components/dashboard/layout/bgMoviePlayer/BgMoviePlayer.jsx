import { useSelector } from "react-redux";
import useMovieTrailer from "../../../../hooks/useMovieTrailer";

const BgMoviePlayer = ({ movieId }) => {
  const trailerId = useSelector(store => store.playingMovies.trailer);
  useMovieTrailer(movieId);
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black">
      <iframe className="w-full aspect-video z-0 -top-3 relative"
        src={"https://www.youtube.com/embed/" + trailerId?.key+"?&autoplay=1&mute=1&modestbranding=1"}
        allowFullScreen
        frameBorder="0">
      </iframe>
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-1"></div> */}
    </div>
  )
}

export default BgMoviePlayer