import React, { useState } from "react";
import "./Search.css";
const Search = ({ searchMovie }) => {
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
    <form className="search" onSubmit={onSubmit}>
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
  );
};

export default Search;
