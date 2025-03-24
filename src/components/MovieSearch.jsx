// src/components/MovieSearch.jsx
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const MovieSearch = ({ searchText }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://www.omdbapi.com/?s=${searchText}i=tt3896198&apikey=9de54fdf`);
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error('Error fetching search results', error);
      } finally {
        setLoading(false);
      }
    };

    if (searchText) {
      fetchMovies();
    }
  }, [searchText]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))
          ) : (
            <p>No movies found for "{searchText}"</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
