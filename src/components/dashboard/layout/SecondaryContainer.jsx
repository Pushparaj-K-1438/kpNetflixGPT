import { useSelector } from "react-redux"
import MovieList from "./moviesList/MovieList"

const SecondaryContainer = () => {
  const moviesList = useSelector((store) => store.movies);
  return (
    moviesList.nowPlayingMovies && (
      <div className="relative z-10 flex flex-col gap-5 mb-8">
        <MovieList title="Top Rated Movies" movies={moviesList?.topRatedMovies} isFirst/>
        <MovieList title="Now Playing" movies={moviesList?.nowPlayingMovies} />
        <MovieList title="Upcoming Movies" movies={moviesList?.upcomingMovies} />
        <MovieList title="Popular Movies" movies={moviesList?.popularMovies} />
      </div>
    )

  )
}

export default SecondaryContainer