import React, { useState } from "react";

const MovieCard = ({ movie }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      style={{
        maxWidth: "250px",
        width: "100%",
        margin: "0 auto",
        backgroundColor: "#1a1a1a",
        border: "1px solid gray",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)")}
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : ""}
        alt={movie.Title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      />
      <div style={{ padding: "16px", color: "white" }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{movie.Title}</h3>
        <p style={{ color: "#b0b0b0", marginBottom: "8px" }}>{movie.Year}</p>
        {expanded ? (
          <div>
            <p style={{ color: "#ddd", marginTop: "8px" }}>
              <strong>Plot:</strong> {movie.Plot || "No plot available"}
            </p>
            <button
              onClick={handleExpand}
              style={{
                marginTop: "8px",
                color: "#3498db",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Show Less
            </button>
          </div>
        ) : (
          <button
            onClick={handleExpand}
            style={{
              marginTop: "8px",
              color: "#3498db",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            Read More
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
