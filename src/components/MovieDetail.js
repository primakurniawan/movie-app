import React from "react";
import "./MovieDetail.css";

const MovieDetail = ({ movie }) => {
  return (
    <div className="movieDetail">
      <div className="movieDetail__img">
        <img src={movie.Poster} alt={movie.poster} />
      </div>
      <div className="movieDetail__info">
        <ul className="movieDetail_info__list">
          <li className="movieDetail_info__list__item--title">{movie.Title}</li>
          <li className="movieDetail_info__list__item--year">{movie.Year}</li>
          <li className="movieDetail_info__list__item--rating">
            {movie.imdbRating}
          </li>
          <li className="movieDetail_info__list__item--rated">{movie.Rated}</li>
          <li className="movieDetail_info__list__item--runtime">
            {movie.Runtime}
          </li>
          <li className="movieDetail_info__list__item--genre">{movie.Genre}</li>
          <li className="movieDetail_info__list__item--plot">{movie.Plot}</li>
          <li className="movieDetail_info__list__item--actors">
            {movie.Actors}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetail;
