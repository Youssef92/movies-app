import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecommendationList from "../components/RecommendationList";
import MovieDetailsCard from "../components/MovieDetailsCard";

const API_KEY = "6855fe09b19c570e9e45b85903af1c1a";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [Recommendmovies, setRecommendmovies] = useState([]);

  const fetchRecommendationMovies = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`
      );
      const data = await res.json();
      setRecommendmovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchRecommendationMovies();
  }, [id]);

  const fetchMoviesDetails = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );
      const data = await res.json();
      console.log("Movie Details:", data);
      setMovie(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMoviesDetails();
  }, [id]);

  return (
    <div style={{ paddingTop: "60px", paddingLeft: "20px", width: "98vw" }}>
      <div className="container-fluid mb-4">
        <MovieDetailsCard movie={movie} />
      </div>
      <hr />
      <h2>Recommendations</h2>
      <div style={{ paddingTop: "20px" }}>
        {" "}
        <RecommendationList movies={Recommendmovies} />
      </div>
    </div>
  );
}

export default MovieDetails;
