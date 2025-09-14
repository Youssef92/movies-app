import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import StarRating from "./StarRating";

function WishlistCard({ movie }) {
  const { toggleWishlist } = useContext(AppContext);

  return (
    <div className="mb-3 shadow-sm">
      <div className="row g-0">
        <div className="col-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="img-fluid h-100"
            alt={movie.title}
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="col-8">
          <div className="card-body d-flex flex-column justify-content-between h-100">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <h5 className="card-title fw-bold">{movie.title}</h5>
              <button
                className="btn p-0"
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1.5rem",
                  color: "gold",
                }}
                onClick={() => toggleWishlist(movie)}
              >
                ❤️
              </button>
            </div>

            <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
              {movie.release_date || "N/A"}
            </p>
            <p
              className="d-flex justify-content-between align-items-start mb-2"
              style={{ fontSize: "0.9rem" }}
            >
              <StarRating voteAverage={movie.vote_average} />
              {movie.vote_count} votes
            </p>

            <p className="card-text" style={{ maxWidth: "95%" }}>
              {movie.overview || "No description available."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistCard;
