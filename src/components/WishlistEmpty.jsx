import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function WishlistEmpty() {
  const { theme } = useContext(AppContext);

  return (
    <div
      className="container-fluid my-4 d-flex justify-content-center align-items-center"
      style={{ height: "78vh" }}
    >
      <div>
        <div>
          <img
            src="Heart Slash.png"
            alt=""
            className={`responsive-img ${theme === "dark" ? "img-dark" : ""}`}
          />{" "}
        </div>

        <div className="wishlist-empty-text">
          <h3 className="fw-bold"> No Movies in Watch list</h3>
          <Link to="/home" className="btn btn-warning btn-backtohome">
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WishlistEmpty;
