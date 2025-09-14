import { useEffect, useState } from "react";
import MoviesGrid from "../components/MoviesGrid";
import Pagination from "../components/Pagination";
import SearchSection from "../components/SearchSection";

const API_KEY = "6855fe09b19c570e9e45b85903af1c1a";

function Home() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = async (page = 1) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
      );
      const data = await res.json();
      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  return (
    <div style={{ paddingTop: "60px", paddingLeft: "20px", width: "98vw" }}>
      <SearchSection showWelcome={true} />
      <h2 className="mb-4">Now Playing</h2>
      <div
        className="container-fluid my-4"
        style={{
          width: "97vw",
        }}
      >
        <MoviesGrid movies={movies} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Home;
