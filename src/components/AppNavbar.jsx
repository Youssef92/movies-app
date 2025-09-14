import { Container, Navbar, Badge, Nav } from "react-bootstrap";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function AppNavbar() {
  const { wishlist } = useContext(AppContext);
  return (
    <Navbar
      bg="warning"
      variant="light"
      expand="lg"
      fixed="top"
      className="shadow-sm py-1 w-100"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <BiSolidCameraMovie size={24} />
          <span className="ms-2 fw-bold fs-6">MOVIE APP</span>
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Link to="/wishlist" style={{ textDecoration: "none" }}>
            <div className="d-flex align-items-center position-relative px-2 py-0 rounded ">
              <FaHeart color="black" size={16} className="me-1" />
              <span
                className="me-1 fw-semibold text-dark"
                style={{ fontSize: "0.85rem" }}
              >
                Watchlist
              </span>
              {wishlist.length > 0 && (
                <Badge
                  pill
                  bg="light"
                  style={{
                    position: "absolute",
                    top: "-7px",
                    right: "-9px",
                    fontSize: "0.65rem",
                    color: "Black",
                  }}
                >
                  {wishlist.length}
                </Badge>
              )}
            </div>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
