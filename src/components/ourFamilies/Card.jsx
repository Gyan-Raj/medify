import React from "react";
import style from "./Card.module.css";

const Card = ({ icon, plus, text }) => {
  return (
    <div className={style.card}>
      <div className={style.icon}>{icon}</div>
      <div className={style.plus}>{plus}</div>
      <div className={style.text}>{text}</div>
    </div>
  );
};

export default Card;
