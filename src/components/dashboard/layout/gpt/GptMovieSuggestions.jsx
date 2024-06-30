import { useSelector } from "react-redux"
import SearchGptForMovies from "./SearchGptForMovies"
import MovieList from "../moviesList/MovieList"

const GptMovieSuggestions = () => {
  const { gptSuggestedMovies, fetchedMoviesTmdb } = useSelector((store) => store.searchedMovies);
  return (
    <div className="p-4 flex flex-col gap-3">
      <SearchGptForMovies />
      <div className="">
        {
          gptSuggestedMovies ?
            gptSuggestedMovies?.map((movieName, index) => (<MovieList key={movieName} title={movieName} movies={fetchedMoviesTmdb[index]} />))
            : "No Results Found"
        }
      </div>
    </div>
  )
}

export default GptMovieSuggestions