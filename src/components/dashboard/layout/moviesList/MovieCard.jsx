import { Link } from "react-router-dom"
import { MOVIES_IMG_PATH } from "../../../../utils/image"

const MovieCard = ({ posterImg, rating, movieDetId }) => {
  return (
    posterImg &&
    <Link to={'/movies/'+movieDetId}>
    <div className="flex-none w-32 h-48 transition-transform duration-200 ease transform hover:scale-105 cursor-pointer relative">
      <img className="w-full h-full object-cover rounded" src={MOVIES_IMG_PATH + posterImg} alt="" />
      <p className="fixed bottom-2 right-2 bg-red-700 text-white h-8 w-8 flex items-center justify-center text-xs font-bold rounded-full drop-shadow-lg">{rating && parseFloat(rating).toFixed(1)}</p>
    </div>
    </Link>
  )
}

export default MovieCard