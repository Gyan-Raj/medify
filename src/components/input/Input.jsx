import React from "react";
import style from "./Input.module.css";

const Input = ({
  icon,
  type,
  placeholder,
  name,
  value,
  onChange,
  styles,
  disabled,
}) => {
  return (
    <p className={style[styles || "input"]}>
      {icon && <span>{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </p>
  );
};

export default Input;
