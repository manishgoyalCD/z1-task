import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://www.omdbapi.com/?s=avengers&i=tt3896198&apikey=9de54fdf"
        );
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search.slice(0, 10));
        }
      } catch (error) {
        console.error("Error fetching default movies", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {loading ? (
        <p style={{ fontSize: "1.2rem", color: "#e50914" }}>Loading...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            maxWidth: "1200px",
            width: "100%",
          }}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
