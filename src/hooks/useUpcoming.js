import { useDispatch } from "react-redux";
import { OPTIONS, UPCOMMING_MOVIES_API } from "../utils/movieConstants";
import { addUpcomingMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const useUpcoming = () => {
    const dispatch = useDispatch();
    const fetchMovies = async () => {
        const response = await fetch(UPCOMMING_MOVIES_API, OPTIONS);
        const fetchedJson = await response.json();
        dispatch(addUpcomingMovies(fetchedJson.results));
    }

    useEffect(() => {
        fetchMovies();
    }, []);
}

export default useUpcoming