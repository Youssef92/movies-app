import MovieCard from "./MovieCard";

function RecommendationList({ movies }) {
  return (
    <div>
      <div className="row  ">
        {movies.slice(0, 6).map((movie) => (
          <div key={movie.id} className="col-2">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendationList;
