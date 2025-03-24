// src/components/MovieCard.jsx
import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="max-w-xs w-full mx-auto bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200'}
        alt={movie.Title}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{movie.Title}</h3>
        <p className="text-gray-600">{movie.Year}</p>
        {expanded ? (
          <div>
            <p className="text-gray-800 mt-2"><strong>Plot:</strong> {movie.Plot || 'No plot available'}</p>
            <button
              onClick={handleExpand}
              className="mt-2 text-blue-500 hover:underline"
            >
              Show Less
            </button>
          </div>
        ) : (
          <button
            onClick={handleExpand}
            className="mt-2 text-blue-500 hover:underline"
          >
            Read More
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
