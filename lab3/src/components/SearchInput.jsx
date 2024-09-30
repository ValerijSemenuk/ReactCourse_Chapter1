import React from 'react';

function SearchInput({ search, onSearchChange }) {
  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Search todos"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;