import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import WishlistEmpty from "../components/WishlistEmpty";
import WishlistGrid from "../components/WishlistGrid";

function Wishlist() {
  const { wishlist } = useContext(AppContext);

  return (
    <div style={{ paddingTop: "60px", paddingLeft: "20px", width: "98vw" }}>
      <h2 className="mb-4">My Watchlist</h2>
      <div className="container-fluid my-4" style={{ minHeight: "78vh" }}>
        {wishlist.length === 0 ? (
          <WishlistEmpty />
        ) : (
          <WishlistGrid movies={wishlist} />
        )}
      </div>
    </div>
  );
}

export default Wishlist;
