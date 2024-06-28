import React from "react";
import style from "./SlotInput.module.css";

const SlotInput = ({ type, name, value, disabled, styles }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      disabled={disabled}
      className={style[styles] || "input"}
    />
  );
};

export default SlotInput;
