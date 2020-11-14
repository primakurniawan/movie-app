import React from "react";
import "./MovieItem.css";

const MovieItem = ({ movie, getMovieDetail }) => {
  const onClick = () => {
    getMovieDetail(movie.imdbID);
  };
  return (
    <li className="movieItem" onClick={onClick}>
      <div className="movieItem__img">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://p7.hiclipart.com/preview/59/893/319/film-clapperboard-cinematic-techniques-clapperboard-film-film-elements.jpg"
          }
          alt={movie.Poster}
        />
      </div>
      <div className="movieItem__info">
        <p className="movieItem__info--title">{movie.Title}</p>
        <p className="movieItem__info--year">{movie.Year}</p>
      </div>
    </li>
  );
};

export default MovieItem;
