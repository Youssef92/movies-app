import MovieCard from "./MovieCard";

function MoviesGrid({ movies }) {
  return (
    <div className="row  ">
      {movies.map((movie) => (
        <div key={movie.id} className="col-12 col-lg-2 g-3">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}

export default MoviesGrid;
