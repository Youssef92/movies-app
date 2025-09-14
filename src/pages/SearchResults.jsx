import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesGrid from "../components/MoviesGrid";
import SearchSection from "../components/SearchSection";
import NotFound from "../components/NotFound";

const API_KEY = "6855fe09b19c570e9e45b85903af1c1a";

function SearchResults() {
  const { query } = useParams();
  const decodedQuery = decodeURIComponent(query);
  const [movies, setMovies] = useState([]);

  const fetchSearchResults = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${decodedQuery}`
      );
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [decodedQuery]);

  return (
    <div style={{ paddingTop: "60px", paddingLeft: "20px", width: "98vw" }}>
      <SearchSection initialQuery={decodedQuery} showWelcome={false} />
      <h2 className="mb-4">
        Search Result for:{" "}
        <span style={{ fontWeight: "normal" }}>{decodedQuery}</span>
      </h2>
      <div className="container-fluid my-4 " style={{ width: "97vw" }}>
        {movies.length === 0 ? <NotFound /> : <MoviesGrid movies={movies} />}
      </div>
    </div>
  );
}

export default SearchResults;
