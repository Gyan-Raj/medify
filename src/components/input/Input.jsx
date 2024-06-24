import React from "react";
import style from "./Input.module.css";

const Input = ({ icon, type, placeholder, name, value, onChange }) => {
  return (
    <p className={style.input}>
      <span>{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </p>
  );
};

export default Input;
