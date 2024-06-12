import { useDispatch } from "react-redux";
import { NOW_PLAYING_API, OPTIONS } from "../utils/movieConstants";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const fetchMovies = async () => {
        const response = await fetch(NOW_PLAYING_API, OPTIONS);
        const fetchedJson = await response.json();
        dispatch(addNowPlayingMovies(fetchedJson.results));
    }

    useEffect(() => {
        fetchMovies();
    }, []);
}

export default useNowPlayingMovies