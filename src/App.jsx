import React, { useState } from "react";
import MovieSearch from "./components/MovieSearch";
import Home from "./components/Home";

const App = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div
      className="text-center py-10"
      style={{
        backgroundColor: "#121212",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div className="mb-6">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for a movie"
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            width: "60%",
            maxWidth: "400px",
            borderRadius: "8px",
            border: "1px solid gray",
            padding: "10px",
            fontSize: "1rem",
          }}
        />
      </div>

      {searchText ? <MovieSearch searchText={searchText} /> : <Home />}
    </div>
  );
};

export default App;
