// src/App.jsx
import React, { useState } from 'react';
import MovieSearch from './components/MovieSearch';
import Home from './components/Home';

const App = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-semibold mb-6">Movie Search App</h1>
      <div className="mb-6">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for a movie"
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {searchText ? (
        <MovieSearch searchText={searchText} />
      ) : (
        <Home />
      )}
    </div>
  );
};

export default App;
