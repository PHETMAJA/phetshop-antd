import React from 'react';
import './searchbox.css';

function SearchBox() {
  return (
    <div className="searchbox">
      <div className="searchInput ">
        <input
          type="text"
          placeholder="กำลังมองหาอะไรอยู่?"
          className="search__input"
        />
        <button type="submit" className="search__button">
          <i className="bx bx-search search__button-icon"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
