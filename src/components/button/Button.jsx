import React from "react";
import style from "./Button.module.css";

const Button = ({ children, handleClick, styles, shadow, type }) => {
  return (
    <button
      onClick={handleClick}
      type={type}
      className={`${style.button} ${style[styles]} ${shadow && style.shadow}`}
    >
      {children}
    </button>
  );
};

export default Button;
