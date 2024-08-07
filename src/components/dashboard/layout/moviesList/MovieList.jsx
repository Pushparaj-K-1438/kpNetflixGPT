import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, isFirst }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className={`text-2xl font-semibold ${isFirst ? 'text-white' : 'text-black'}`}>{title}</h3>
      <div className="flex gap-3 overflow-x-scroll scrollbar-hide h-52 items-center">
        {
          movies?.map((movie) => (
            <MovieCard key={movie?.id} posterImg={movie?.poster_path} rating={movie?.vote_average} movieDetId={movie?.id} />
          ))
        }
      </div>
    </div>
  );
};

export default MovieList;
