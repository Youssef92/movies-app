import { IoIosLink } from "react-icons/io";
import StarRating from "./StarRating";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const IMG_BASE = "https://image.tmdb.org/t/p/w500";

function MovieDetailsCard({ movie }) {
  const { wishlist, toggleWishlist, theme } = useContext(AppContext);

  if (!movie) return null;

  const isInWishlist = wishlist.some((m) => m.id === movie.id);

  return (
    <div className="container my-5">
      <div className="row">
        {/* Image */}
        <div className="col-md-3">
          <img
            src={
              movie.poster_path
                ? IMG_BASE + movie.poster_path
                : "/no-poster.png"
            }
            alt={movie.title}
            className="img-fluid rounded shadow"
            style={{ height: "450px", width: "400px" }}
          />
        </div>
        {/* Datails */}
        <div className="col-md-9">
          <div className="d-flex justify-content-between align-items-start">
            <h2>{movie.title}</h2>

            <button
              className="btn p-0"
              style={{
                background: "none",
                border: "none",
                fontSize: "1.8rem",
              }}
              onClick={() => toggleWishlist(movie)}
            >
              {isInWishlist ? "❤️" : "🤍"}
            </button>
          </div>
          <p className={theme === "light" ? "text-muted" : "light"}>
            {movie.release_date}
          </p>

          {/* Rating*/}
          <div className="d-flex align-items-center mb-2">
            <StarRating voteAverage={movie.vote_average} />
            <span className="ms-2">{movie.vote_count} votes</span>
          </div>

          <p>{movie.overview}</p>

          {/* Classification */}
          <div className="mb-3">
            {movie.genres?.map((genre) => (
              <span key={genre.id} className="badge bg-warning text-dark me-2">
                {genre.name}
              </span>
            ))}
          </div>

          <p>
            <strong>Duration:</strong> {movie.runtime} Min. <br />
            <strong>Languages:</strong>{" "}
            {movie.spoken_languages
              ?.map((lang) => lang.english_name)
              .join(", ")}
          </p>

          <div className="d-flex flex-wrap mb-3">
            {movie.production_companies?.map((company) => (
              <div key={company.id} className="me-3">
                {company.logo_path && (
                  <img
                    src={IMG_BASE + company.logo_path}
                    alt={company.name}
                    style={{ height: "40px" }}
                  />
                )}
              </div>
            ))}
          </div>

          {movie.homepage && (
            <a
              href={movie.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-warning"
              style={{ borderRadius: "20px" }}
            >
              Website <IoIosLink />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsCard;
