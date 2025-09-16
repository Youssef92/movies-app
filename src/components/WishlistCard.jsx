import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import StarRating from "./StarRating";

function WishlistCard({ movie }) {
  const { toggleWishlist } = useContext(AppContext);

  return (
    <div className="mb-3 shadow pt-3" style={{ backgroundColor: "#eee" }}>
      <div className="row g-4">
        <div className="col-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="img-fluid "
            alt={movie.title}
            style={{ objectFit: "cover", height: "280px" }}
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <div
              className="d-flex justify-content-between align-items-start"
              // style={{ position: "relative" }}
            >
              <h5 className="card-title fw-bold">{movie.title}</h5>
              <button
                className="btn "
                style={{
                  // position: "absolute",
                  background: "none",
                  border: "none",
                  fontSize: "1.5rem",
                  color: "gold",
                  // top: "1px",
                  // left: "400px",
                }}
                onClick={() => toggleWishlist(movie)}
              >
                ❤️
              </button>
            </div>

            <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
              {movie.release_date || "N/A"}
            </p>
            <div className="d-flex align-items-center mb-2">
              <StarRating voteAverage={movie.vote_average} />
              <span className="ms-2">{movie.vote_count} votes </span>
            </div>

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
