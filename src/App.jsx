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
import LogIn from "./pages/LogIn";
import Registration from "./pages/Registration";
import ShowError from "./components/ShowError";

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
          <LogIn />
        </>
      ),
    },
    {
      path: "/home",
      element: (
        <>
          <AppNavbar />
          <Home />
        </>
      ),
    },
    {
      path: "/registration",
      element: (
        <>
          <Registration />
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
          <ShowError />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
