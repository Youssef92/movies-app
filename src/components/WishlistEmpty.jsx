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
          {/* style={{ width: "400px" }} */}
        </div>

        <div className="wishlist-empty-text">
          <h3
            className="fw-bold"
            // style={{ marginLeft: "50px" }}
          >
            {" "}
            No Movies in Watch list
          </h3>
          <Link
            to="/"
            className="btn btn-warning btn-backtohome"
            // style={{ marginLeft: "80px", marginTop: "20px" }}
          >
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WishlistEmpty;
