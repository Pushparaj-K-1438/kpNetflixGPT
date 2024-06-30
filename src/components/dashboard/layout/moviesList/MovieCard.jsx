import { MOVIES_IMG_PATH } from "../../../../utils/image"

const MovieCard = ({ posterImg }) => {
  return (
    posterImg &&
    <div className="flex-none w-32 h-48 transition-transform duration-200 ease transform hover:scale-105 cursor-pointer">
      <img className="w-full h-full object-cover rounded" src={MOVIES_IMG_PATH + posterImg} alt="" />
    </div>
  )
}

export default MovieCard