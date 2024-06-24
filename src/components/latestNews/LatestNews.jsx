import React from "react";
import style from "./LatestNews.module.css";
import Card from "./Card";

const LatestNews = () => {
  return (
    <div className={style.latestNews}>
      <p className={style.topContainer}>Blog & News</p>
      <p className={style.middleContainer}>Read Our Latest News</p>
      <p className={style.bottomContainer}>
        <Card />
        <Card />
        <Card />
      </p>
    </div>
  );
};

export default LatestNews;
