import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ searchGame }) => {
  const [term, setTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    searchGame(term);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="search-container">
        <input
          onChange={(e) => setTerm(e.target.value)}
          type="text"
          placeholder="search by title"
          className="search-box"
          value={term}
        />
        <button style={{ cursor: "pointer" }} type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
