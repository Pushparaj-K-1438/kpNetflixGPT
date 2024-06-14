import useNowPlayingMovies from "../../hooks/useNowPlayingMovies"
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRated from "../../hooks/useTopRated";
import useUpcoming from "../../hooks/useUpcoming";
import Header from "../header/Header"
import MainContainer from "./layout/MainContainer";
import SecondaryContainer from "./layout/SecondaryContainer";

const Home = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcoming();
  useTopRated();
  return (
    <div className="flex flex-col h-auto w-screen">
      <Header />
      <div className="flex flex-col h-full px-4 gap-8 bg-black" style={{ marginTop: '20%' }}>
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  )
}

export default Home