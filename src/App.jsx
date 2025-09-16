import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Wishlist from "./pages/Wishlist";
import SearchResults from "./pages/SearchResults";
import AppNavbar from "./components/AppNavbar";
import NotFound from "./components/NotFound";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css";

function App() {
  const { theme } = useContext(AppContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <AppNavbar />
          <Home />
        </>
      ),
    },
    {
      path: "/movie/:id",
      element: (
        <>
          <AppNavbar />
          <MovieDetails />
        </>
      ),
    },
    {
      path: "/wishlist",
      element: (
        <>
          <AppNavbar />
          <Wishlist />
        </>
      ),
    },
    {
      path: "/search/:query",
      element: (
        <>
          <AppNavbar />
          <SearchResults />
        </>
      ),
    },
    {
      path: "*",
      element: (
        <>
          <AppNavbar />
          <NotFound />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
