import { useSelector } from "react-redux";
import useMovieTrailer from "../../../../hooks/useMovieTrailer";

const BgMoviePlayer = ({ movieId }) => {
  const trailerId = useSelector(store => store.movies.trailer);
  useMovieTrailer(movieId);
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black">
      <iframe className="w-full aspect-video z-0 -top-6 relative"
        src={"https://www.youtube.com/embed/" + trailerId?.key + "?&autoplay=1&mute=1&modestbranding=1"}
        allowFullScreen
        frameBorder="0">
      </iframe>
      <div className="absolute inset-0 bg-black opacity-60 z-10 aspect-video -top-6"/>
    </div>
  )
}

export default BgMoviePlayer