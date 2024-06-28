import React from "react";
import style from "./SearchBar.module.css";
import Search from "./../../../search/Search";

const SearchBar = ({ home }) => {
  return (
    <div className={style.searchBar}>
      <div className={style.background}></div>
      <div className={style.search}>
        <div>
          <Search home={home} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
