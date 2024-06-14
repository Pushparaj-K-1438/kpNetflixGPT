import { useDispatch } from "react-redux";
import { OPTIONS, TOP_RATED_API } from "../utils/movieConstants";
import { addTopRatedMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const useTopRated = () => {
    const dispatch = useDispatch();
    const fetchMovies = async () => {
        const response = await fetch(TOP_RATED_API, OPTIONS);
        const fetchedJson = await response.json();
        dispatch(addTopRatedMovies(fetchedJson.results));
    }

    useEffect(() => {
        fetchMovies();
    }, []);
}

export default useTopRated