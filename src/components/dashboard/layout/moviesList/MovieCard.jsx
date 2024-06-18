import { MOVIES_IMG_PATH } from "../../../../utils/image"

const MovieCard = ({ posterImg }) => {
  return (
    <div className="flex-none w-32 h-auto">
      <img className="w-full h-full object-cover rounded" src={MOVIES_IMG_PATH + posterImg} alt="" />
    </div>
  )
}

export default MovieCard