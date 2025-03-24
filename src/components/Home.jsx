// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://www.omdbapi.com/?s=batman&i=tt3896198&apikey=9de54fdf');
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search.slice(0, 10)); 
        }
      } catch (error) {
        console.error('Error fetching default movies', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
