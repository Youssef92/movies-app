import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";

function NotFound({ message = "No movies found!" }) {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: "60vh" }}
    >
      <BiCameraMovie size={120} color="#ccc" className="mb-3" />

      <h3 className="fw-bold mb-2">{message}</h3>
      <p className="text-muted mb-4">
        We couldn’t find any results matching your search.
      </p>

      <Link to="/" className="btn btn-warning">
        ⬅ Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
