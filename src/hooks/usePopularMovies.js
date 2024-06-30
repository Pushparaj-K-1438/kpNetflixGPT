import { useDispatch, useSelector } from "react-redux";
import { OPTIONS, POPULAR_MOVIES_API } from "../utils/movieConstants";
import { addPopularMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const popularMovies = useSelector((store) => store.movies.addPopularMovies);
    const dispatch = useDispatch();
    const fetchMovies = async () => {
        const response = await fetch(POPULAR_MOVIES_API, OPTIONS);
        const fetchedJson = await response.json();
        dispatch(addPopularMovies(fetchedJson.results));
    }

    useEffect(() => {
        !popularMovies && fetchMovies();
    }, []);
}

export default usePopularMovies