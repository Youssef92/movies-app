import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const { wishlist, toggleWishlist, theme } = useContext(AppContext);

  const isInWishlist = wishlist.some((m) => m.id === movie.id);

  const ratingPercentage = movie.vote_average * 10;

  let borderColor = "#dc3545";
  if (ratingPercentage > 70) borderColor = "#28a745";
  else if (ratingPercentage >= 50) borderColor = "#ffc107";

  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
      <div
        className="card h-100"
        style={{
          border: "none",
        }}
      >
        <div className="position-relative">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="card-img-top "
            alt={movie.title}
            style={{
              height: "400px",
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
          />

          <div
            className="position-absolute"
            style={{
              bottom: "-16px",
              left: "10px",
              width: "40px",
              height: "40px",
            }}
          >
            <svg width="40" height="40">
              <circle
                cx="20"
                cy="20"
                r="18"
                stroke="#444"
                strokeWidth="4"
                fill="black"
              />
              <circle
                cx="20"
                cy="20"
                r="18"
                stroke={borderColor}
                strokeWidth="4"
                fill="black"
                strokeDasharray={2 * Math.PI * 18}
                strokeDashoffset={
                  2 * Math.PI * 18 * (1 - ratingPercentage / 100)
                }
                strokeLinecap="round"
                transform="rotate(-90 20 20)"
              />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="10"
                fill="white"
              >
                {Math.round(ratingPercentage)}%
              </text>
            </svg>
          </div>
        </div>
        <div className="card-body d-flex justify-content-between align-items-center">
          <div className="DetailsCard">
            <h5 className="card-title">{movie.title}</h5>
            <span className={theme === "light" ? "text-muted" : "light"}>
              {movie.release_date || "N/A"}
            </span>
          </div>
          <div>
            <button
              className="btn p-0"
              style={{
                background: "none",
                border: "none",
                fontSize: "1.2rem",
              }}
              onClick={(e) => {
                e.preventDefault();
                toggleWishlist(movie);
              }}
            >
              {isInWishlist ? "❤️" : "🤍"}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
