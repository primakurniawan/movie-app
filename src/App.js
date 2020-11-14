import React, { useState, useEffect } from "react";
import "./App.css";

import Search from "./components/Search";
import MovieDetail from "./components/MovieDetail";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState({});
  const [movie, setMovie] = useState({});

  const fetchMovies = (title) => {
    fetch(`http://www.omdbapi.com/?apikey=c965042e&s=${title}`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  };

  const fetchMovie = (id) => {
    fetch(`http://www.omdbapi.com/?apikey=c965042e&i=${id}&plot=full`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   fetchMovies();
  //   fetchMovie();
  // }, []);

  const searchMovie = (title) => {
    fetchMovies(title);
  };

  const getMovieDetail = (id) => {
    fetchMovie(id);
  };

  return (
    <div className="app">
      <div className="app__left">
        <Search searchMovie={searchMovie} />
        <MovieList movies={movies.Search} getMovieDetail={getMovieDetail} />
      </div>
      <div className="app__right">
        <MovieDetail getMovieDetail={getMovieDetail} movie={movie} />
      </div>
    </div>
  );
};

export default App;
