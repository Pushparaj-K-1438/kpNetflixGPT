import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { MOVIE_DETAILS_APT, OPTIONS } from "../../../../utils/movieConstants";
import { MOVIES_DETAILS_IMG_PATH, MOVIES_IMG_PATH } from "../../../../utils/image";

const DetailsMovie = () => {
  const {movieId} = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const getMovieData = async () => {
    const getMovieDetails = await fetch(MOVIE_DETAILS_APT+movieId,OPTIONS);
    const fetchedMovieDetails = await getMovieDetails.json();
    setMovieDetails(fetchedMovieDetails);
    console.log(fetchedMovieDetails);
  }
  useEffect(()=>{
    getMovieData();
  },[movieId])
  return (
    <div className="flex flex-col items-center">
    {movieDetails && (
      <div className="w-full h-screen custom-bg flex items-start justify-center bg-cover bg-center relative p-4 lg:px-8"
        style={{ backgroundImage: `url(${MOVIES_DETAILS_IMG_PATH+movieDetails.backdrop_path})`}}
      >
        <div className="bg-black bg-opacity-70 absolute  inset-0"></div>
        <img src={MOVIES_IMG_PATH+movieDetails.poster_path} alt="Movie Poster" className="z-10 rounded-md w-1/4 h-full object-fill" />
        <div className="p-4 rounded-lg text-white z-20">
          <p className="font-bold text-4xl">{movieDetails.title}({new Date(movieDetails.release_date).getFullYear()})</p>
          <p>{movieDetails.genres.map(gener => gener.name).join(', ')}</p>
          <p className="text-gray-800">{movieDetails?.tagline}</p>
          <p className="mt-2">{movieDetails.overview}</p>
          {/* Add more movie details as needed */}
        </div>
      </div>
    )}
  </div>
  )
}

export default DetailsMovie