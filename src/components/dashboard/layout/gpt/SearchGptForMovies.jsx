import { useDispatch, useSelector } from "react-redux";
import languages from "../../../../utils/languageConstants"
import { useRef } from "react";
import genAI from "../../../../utils/genAI"
import { OPTIONS } from "../../../../utils/movieConstants";
import { setSearchMovies } from "../../../../redux/searchrdMoviesSlice";
import { SEARCHED_MOVIES_IMG_PATH } from "../../../../utils/image";


const SearchGptForMovies = () => {
  const selectedLanguage = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const searchedTmdbMoviesList = async (movie) => {
    const movies = await fetch(SEARCHED_MOVIES_IMG_PATH + movie + '&include_adult=false&page=1', OPTIONS);
    const jsonExtractedMovies = await movies.json();
    return jsonExtractedMovies.results;
  }
  const handleGptSearch = async () => {
    const gptQuery = 'Act as a Movie recomendation system and suggest some movies for the query : ' + searchText.current.value + 'only give me names of maximum 20 movies and minimum 5 movies without numbering, comma separated like this: Narruto,Avengers,One Piece,';
    const model = genAI.getGenerativeModel({
      model: "gemini-1.0-pro",
    });
    const result = await model.generateContent(gptQuery);
    const responseText = await result.response;
    const movieNames = responseText.candidates[0]?.content?.parts[0]?.text.split(',');
    const fetchedMoviesPromiseArray = movieNames?.map((movie) => searchedTmdbMoviesList(movie));
    const fetchedMovies = await Promise.all(fetchedMoviesPromiseArray);
    dispatch(setSearchMovies({ gptSuggestedMovies: movieNames, fetchedMoviesTmdb: fetchedMovies }));
  }
  return (
    <form className="md:w-2/3 md:mx-auto" onSubmit={(e) => e.preventDefault()}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        {languages[selectedLanguage].search}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          ref={searchText}
          className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg"
          placeholder={languages[selectedLanguage].searchPlacejolder}
          required=""
        />
        <button
          type="submit" onClick={handleGptSearch}
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {languages[selectedLanguage].search}
        </button>
      </div>
    </form>

  )
}

export default SearchGptForMovies