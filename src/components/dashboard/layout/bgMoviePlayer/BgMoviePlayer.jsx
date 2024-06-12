import { useEffect } from "react";
import { OPTIONS, TRAILER_API } from "../../../../utils/movieConstants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../../../../redux/movieSlice";

const BgMoviePlayer = ({ movieId }) => {
  const trailerId = useSelector(store => store.playingMovies.trailer);
  const dispatch = useDispatch();
  const trailer = async () => {
    const response = await fetch(TRAILER_API + movieId + "/videos?", OPTIONS);
    const fetchedJson = await response.json();
    const filteredVideo = fetchedJson.results.filter((item) => item.type === "Trailer");
    const trailerVideo = filteredVideo.length ?filteredVideo[0] : fetchedJson.results[0];
    dispatch(addTrailer(trailerVideo));
  }
  useEffect(() => {
    trailer();
  }, [])
  return (
    <div>
      <iframe 
        width="560" 
        height="315" 
        src={"https://www.youtube.com/embed/"+trailerId?.key}
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default BgMoviePlayer