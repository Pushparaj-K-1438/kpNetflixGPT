import SearchGptForMovies from "./SearchGptForMovies"

const GptMovieSuggestions = () => {
  return (
    <div className="p-4 flex flex-col gap-3">
        <SearchGptForMovies />
        <p>Searched List</p>
    </div>
  )
}

export default GptMovieSuggestions