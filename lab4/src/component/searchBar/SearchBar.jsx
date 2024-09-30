import React from "react";

const SearchBar = ({ searchValue, handleSearchValueChange }) => {
  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchValueChange}
        placeholder="Search by title"
      />
    </div>
  );
};

export default SearchBar;
