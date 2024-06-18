import { useSelector } from "react-redux"
import BgMovieDetails from "./bgMoviePlayer/BgMovieDetails"
import BgMoviePlayer from "./bgMoviePlayer/BgMoviePlayer"

const MainContainer = () => {
  const movieData = useSelector(store => store.movies?.nowPlayingMovies);
  if (!movieData) return null;
  const mainMovie = movieData[4];
  const { title, overview, id } = mainMovie;
  // console.log("movieData", mainMovie);

  return (
    <div>
      <BgMoviePlayer movieId={id} />
      <BgMovieDetails title={title} description={overview} />
    </div>
  )
}

export default MainContainer