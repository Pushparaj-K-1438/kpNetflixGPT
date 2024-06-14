import useNowPlayingMovies from "../../hooks/useNowPlayingMovies"
import Header from "../header/Header"
import MainContainer from "./layout/MainContainer";
import SecondaryContainer from "./layout/SecondaryContainer";

const Home = () => {
  useNowPlayingMovies();
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <div className="flex flex-col h-full px-4" style={{ marginTop: '20%' }}>
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  )
}

export default Home