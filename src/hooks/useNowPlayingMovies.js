import { useDispatch, useSelector } from "react-redux";
import { NOW_PLAYING_API, OPTIONS } from "../utils/movieConstants";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const nowPlayingMovies = useSelector((store) => store.movies.addNowPlayingMovies);
    const dispatch = useDispatch();
    const fetchMovies = async () => {
        const response = await fetch(NOW_PLAYING_API, OPTIONS);
        const fetchedJson = await response.json();
        dispatch(addNowPlayingMovies(fetchedJson.results));
    }

    useEffect(() => {
        !nowPlayingMovies && fetchMovies();
    }, []);
}

export default useNowPlayingMovies