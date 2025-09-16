import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

function NotFound({ message = "No movies found!" }) {
  const { theme } = useContext(AppContext);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: "60vh" }}
    >
      <BiCameraMovie size={120} color="#ccc" className="mb-3" />

      <h3 className="fw-bold mb-2">{message}</h3>
      <p className={theme === "light" ? "text-muted mb-4" : "light mb-4"}>
        We couldn’t find any results matching your search.
      </p>

      <Link to="/" className="btn btn-warning">
        ⬅ Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
