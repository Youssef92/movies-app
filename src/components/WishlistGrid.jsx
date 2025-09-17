import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import WishlistCard from "./WishlistCard";

function WishlistGrid() {
  const { wishlist } = useContext(AppContext);

  return (
    <div className="row d-flex flex-wrap justify-content-start">
      <div className="row">
        {wishlist.map((movie) => (
          <div key={movie.id} className="col-12 col-lg-6 mb-4">
            <WishlistCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishlistGrid;
