import React from "react";
import "./MovieItem.css";

const MovieItem = ({ movie, getMovieDetail }) => {
  const onClick = () => {
    getMovieDetail(movie.imdbID);
  };
  return (
    <li className="movieItem" onClick={onClick}>
      <div className="movieItem__img">
        <img src={movie.Poster} alt={movie.Poster} />
      </div>
      <div className="movieItem__info">
        <p className="movieItem__info--title">{movie.Title}</p>
        <p className="movieItem__info--year">{movie.Year}</p>
      </div>
    </li>
  );
};

export default MovieItem;
