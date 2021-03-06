import React, { useState, useEffect } from "react";
import "./App.css";

import Search from "./components/Search";
import MovieDetail from "./components/MovieDetail";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";

const App = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchResults, SetSearchResults] = useState(0);
  const [movie, setMovie] = useState({});
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(100);

  const fetchMovies = async (title, page = 1) => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=c965042e&s=${title}&page=${page}`
      );
      const data = await res.json();
      if (data.Response !== "False") {
        setMovies(data.Search);
        SetSearchResults(data.totalResults);
        setTotalPage(Math.ceil(parseInt(data.totalResults) / 10));
      } else {
        setMovies([]);
        SetSearchResults(0);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchMovie = async (id) => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=c965042e&i=${id}&plot=full`
      );
      const data = await res.json();
      setMovie(data);
    } catch (err) {
      console.error(err);
    }
  };

  const searchMovie = (title) => {
    setSearchTitle(title);
    fetchMovies(title);
    setPage(1);
  };

  const getMovieDetail = (id) => {
    fetchMovie(id);
  };

  const changePage = (toPage) => {
    setPage(toPage);
    fetchMovies(searchTitle, toPage);
  };

  return (
    <div className="app">
      <div className="app__left">
        <Search
          searchMovie={searchMovie}
          searchResults={searchResults}
          searchTitle={searchTitle}
        />
        <MovieList movies={movies} getMovieDetail={getMovieDetail} />
        {movies.length > 0 && (
          <Pagination
            page={page}
            changePage={changePage}
            totalPage={totalPage}
          />
        )}
      </div>
      <div className="app__right">
        <MovieDetail getMovieDetail={getMovieDetail} movie={movie} />
      </div>
    </div>
  );
};

export default App;
