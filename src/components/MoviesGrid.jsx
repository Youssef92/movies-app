import MovieCard from "./MovieCard";

function MoviesGrid({ movies }) {
  return (
    <div className="row  ">
      {movies.map((movie) => (
        <div key={movie.id} className="col-2">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}

export default MoviesGrid;
