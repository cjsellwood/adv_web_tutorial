import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  console.log("searchBox")
  return (
    <div className="pa2">
      <input
      aria-label="search robots"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
        value={searchfield}
      />
    </div>
  );
};

export default SearchBox;
