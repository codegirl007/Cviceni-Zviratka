import React, { useState } from "react";
import searchIcon from "../../img/search_icon.png";
import "./Search.css";

export const Search = ({ searchAnimal, searchValue }) => {
  const onSearch = (e) => {
    searchAnimal(e.target.value);
  };
  return (
    <div className="wrapper">
      <div className="searchbar">
        <input
          type="text"
          value={searchValue}
          onChange={onSearch}
          size="32"
        ></input>
        <img src={searchIcon} alt="search" className="search" />
      </div>
    </div>
  );
};
