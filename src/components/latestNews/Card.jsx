import React from "react";
import style from "./Card.module.css";
import { ReactComponent as Image } from "../../assets/latestNews/image.svg";
import { ReactComponent as Doctor } from "../../assets/latestNews/doctor.svg";

const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <Image />
      </div>
      <div style={{ padding: "1rem" }}>
        <p className={style.date}>Medical I March 31, 2022</p>
        <p className={style.tips}>
          6 Tips To Protect Your Mental Health When You’re Sick
        </p>
        <div className={style.bottomContainer}>
          <Doctor />
          <p> Rebecca Lee</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
