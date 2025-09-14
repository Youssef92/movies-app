import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchSection({ initialQuery = "", showWelcome = false }) {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(`/search/${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="mb-4 p-4 bg-secondary text-white rounded">
      {showWelcome && (
        <div>
          <h2>Welcome To Movie App</h2>
          <p>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
      )}

      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Film"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-warning" onClick={handleSearch}>
          search
        </button>
      </div>
    </div>
  );
}

export default SearchSection;
