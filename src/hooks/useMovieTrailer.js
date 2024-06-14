import { useDispatch } from "react-redux";
import { OPTIONS, TRAILER_API } from "../utils/movieConstants";
import { addTrailer } from "../redux/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
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
}

export default useMovieTrailer