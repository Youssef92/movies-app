import { Container, Navbar, Badge, Nav } from "react-bootstrap";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function AppNavbar() {
  const { wishlist, theme, toggleTheme } = useContext(AppContext);
  return (
    <Navbar
      bg={theme === "light" ? "warning" : "dark"}
      variant={theme === "light" ? "light" : "dark"}
      expand="lg"
      fixed="top"
      className="shadow-sm py-1 w-100"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <BiSolidCameraMovie size={24} />
          <span className="ms-2 fw-bold fs-6">MOVIE APP</span>
        </Navbar.Brand>

        <Nav className="ms-auto d-flex align-items-center gap-3">
          <button
            onClick={toggleTheme}
            className="btn btn-sm btn-outline-light d-flex align-items-center"
            style={{ borderRadius: "20px" }}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          <Link to="/wishlist" style={{ textDecoration: "none" }}>
            <div className="d-flex align-items-center position-relative px-2 py-0 rounded ">
              <FaHeart
                color={theme === "light" ? "black" : "white"}
                size={16}
                className="me-1"
              />
              <span
                className="me-1"
                style={{
                  fontSize: "0.85rem",
                  color: theme === "light" ? "black" : "white",
                }}
              >
                Watchlist
              </span>
              {wishlist.length > 0 && (
                <Badge
                  pill
                  bg={theme === "light" ? "light" : "secondary"}
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
