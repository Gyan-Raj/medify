import React from "react";
import style from "./Select.module.css";

const Select = ({ icon, name, value, data, onChange, styles }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={style[styles]}
    >
      <option disabled value="">
        {icon} {value}
      </option>
      {data &&
        data.map((ele, index) => {
          return (
            <option value={ele} key={index}>
              {ele}
            </option>
          );
        })}
    </select>
  );
};

export default Select;
