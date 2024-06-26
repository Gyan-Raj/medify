import React from "react";
import style from "./SearchBar.module.css";
import Search from "./../../../search/Search";

const SearchBar = () => {
  return (
    <div className={style.searchBar}>
      <div className={style.background}></div>
      <div className={style.search}>
        <div>
          <Search home={false} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
