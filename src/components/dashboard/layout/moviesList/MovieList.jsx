import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-2xl text-white font-semibold">{title}</h3>
      <div className="flex gap-2 overflow-x-scroll scrollbar-hide">
        {
          movies?.map((movie)=><MovieCard key={movie?.id} posterImg={movie?.poster_path}/>)
        }
      </div>
        
    </div>
  )
}

export default MovieList