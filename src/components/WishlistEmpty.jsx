import { Link } from "react-router-dom";
import { IoHeartDislikeOutline } from "react-icons/io5";

function WishlistEmpty() {
  return (
    <div
      className="container-fluid my-4 d-flex justify-content-center align-items-center"
      style={{ height: "78vh" }}
    >
      <div>
        <div>
          <img src="Heart Slash.png" alt="" style={{ width: "400px" }} />
        </div>

        <h3 className="fw-bold" style={{ marginLeft: "50px" }}>
          No Movies in Watch list
        </h3>
        <Link
          to="/"
          className="btn btn-warning"
          style={{ marginLeft: "130px", marginTop: "20px" }}
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
}

export default WishlistEmpty;
