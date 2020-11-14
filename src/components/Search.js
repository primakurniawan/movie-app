import React, { useState } from "react";
import "./Search.css";
const Search = ({ searchMovie, searchResults, searchTitle }) => {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    searchMovie(search);
    setSearch("");
  };
  return (
    <div className="search">
      <form className="search__form" onSubmit={onSubmit}>
        <input
          className="search__input"
          type="text"
          value={search}
          name="search"
          placeholder="Type The Title Here"
          onChange={onChange}
        />
        <input type="submit" value="Search" className="search__submit" />
      </form>
      {searchTitle !== "" && (
        <div className="searchInfo">
          <span className="searchResults">{searchResults}</span> Results for{" "}
          <span className="searchTitle">{searchTitle}</span>
        </div>
      )}
    </div>
  );
};

export default Search;
