import React from "react";
import MovieItem from "./MovieItem";
import "./MovieList.css";

const MovieList = ({ movies, getMovieDetail }) => {
  return (
    <div className="movieList">
      <ul className="movieList__list">
        {movies !== undefined &&
          movies.map((e) => (
            <MovieItem
              movie={e}
              key={e.imdbID}
              getMovieDetail={getMovieDetail}
            />
          ))}
      </ul>
    </div>
  );
};

export default MovieList;
