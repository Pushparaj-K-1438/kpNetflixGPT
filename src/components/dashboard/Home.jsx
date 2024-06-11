import { useEffect } from "react";
import { NOW_PLAYING_API, OPTIONS } from "../../utils/movieConstants"
import Header from "../header/Header"

const Home = () => {
  const fetchMovies = async() => {
    const response = await fetch(NOW_PLAYING_API, OPTIONS);
    const fetchedJson = await response.json();
    console.log(fetchedJson);
  }

  useEffect(() => {
    fetchMovies();
  },[])
  return (
    <div>
      <Header />
      <div>
        Dashboard
      </div>
    </div>
  )
}

export default Home