import React, { useState } from "react";
import HospitalCard from "../../hospitalCard/HospitalCard";
import hospital from "./db.json";
import style from "./MyBookings.module.css";
import Button from "./../../button/Button";

const MyBookings = () => {
  const [searchBooking, setSearchBooking] = useState("");
  let handleChange = (e) => {};
  let handleClick = (e) => {};
  return (
    <div className={style.myBookings}>
      <div className={style.background}>
        <p>My Bookings</p>
      </div>
      <div className={style.searchBooking}>
        <input
          type="text"
          name="searchBooking"
          value={searchBooking}
          onChange={handleChange}
          placeholder="Search By Hospital"
        />
        <Button
          children="Search"
          handleClick={handleClick}
          styles="booking"
          type="button"
        />
      </div>
      {hospital &&
        hospital.map((ele) => {
          return <HospitalCard hospital={ele} booking={true} />;
        })}
    </div>
  );
};

export default MyBookings;
