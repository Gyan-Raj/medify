import React from "react";
import style from "./Select.module.css";

const Select = ({
  icon,
  name,
  value,
  onChange,
  data,
  stateData,
  selectedValue,
  styles,
}) => {
  // console.log(data);
  return (
    <select
      id={selectedValue}
      name={name}
      value={value}
      onChange={onChange}
      className={style[styles]}
    >
      <option disabled selected value="">
        {icon} {selectedValue}
      </option>
      {stateData &&
        stateData.map((ele) => {
          return <option value={value}>{ele}</option>;
        })}
    </select>
  );
};

export default Select;
