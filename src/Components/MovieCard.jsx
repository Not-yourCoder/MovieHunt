import React from "react";

export const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "No Image"}
          alt={movie.Title}
        />
      </div>
      <div className="card-text">
        <p className="title">{movie.Title}</p>
        <span className="type">{movie.Type}</span>
      </div>
    </div>
  );
};
