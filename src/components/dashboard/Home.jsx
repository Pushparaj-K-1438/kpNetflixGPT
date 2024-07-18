import { useSelector } from "react-redux";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies"
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRated from "../../hooks/useTopRated";
import useUpcoming from "../../hooks/useUpcoming";
import MainContainer from "./layout/MainContainer";
import SecondaryContainer from "./layout/SecondaryContainer";
import GptMovieSuggestions from "./layout/gpt/GptMovieSuggestions";

const Home = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcoming();
  useTopRated();
  const toggleGpt = useSelector(store => store.gpt);
  return (
    <div className="flex flex-col h-auto w-screen">
      {
        toggleGpt.isgptPage ? <GptMovieSuggestions /> :
          <div className="flex flex-col h-full px-4 gap-8" style={{ marginTop: '20%' }}>
            <MainContainer />
            <SecondaryContainer />
          </div>
      }
    </div>
  )
}

export default Home