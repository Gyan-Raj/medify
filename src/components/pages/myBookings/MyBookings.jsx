// import React, { useEffect, useState } from "react";
// import HospitalCard from "../../hospitalCard/HospitalCard";
// import style from "./MyBookings.module.css";
// import Button from "./../../button/Button";

// const MyBookings = () => {
//   const [searchBooking, setSearchBooking] = useState("");
//   const [hospital, setHospital] = useState([]);
//   useEffect(() => {
//     const storedBookings = localStorage.getItem("appointmentDetails");
//     if (storedBookings) {
//       setHospital([JSON.parse(storedBookings)]);
//     }
//   }, []);
//   let handleChange = (e) => {
//     let { name, value } = e.target;
//     setHospital((prevList) =>
//       prevList.filter((list) =>
//         list.selectedHospital[`Hospital Name`]
//           .toLowerCase()
//           .includes(value.toLowerCase())
//       )
//     );
//   };
//   let handleClick = (e) => {};
//   return (
//     <div className={style.myBookings}>
//       <div className={style.background}>
//         <p>My Bookings</p>
//       </div>
//       <div className={style.searchBooking}>
//         <input
//           type="text"
//           name="searchBooking"
//           value={searchBooking}
//           onChange={handleChange}
//           placeholder="Search By Hospital"
//         />
//         <Button
//           children="Search"
//           handleClick={handleClick}
//           styles="booking"
//           type="button"
//         />
//       </div>
//       {hospital &&
//         hospital.map((ele) => {
//           return <HospitalCard hospital={ele} booking={true} />;
//         })}
//     </div>
//   );
// };

// export default MyBookings;

import React, { useState, useEffect } from "react";
import HospitalCard from "../../hospitalCard/HospitalCard";
import style from "./MyBookings.module.css";
import Button from "./../../button/Button";

const MyBookings = () => {
  const [searchBooking, setSearchBooking] = useState("");
  const [bookings, setBookings] = useState([]);

  const fetchBookings = () => {
    const storedBookings =
      JSON.parse(localStorage.getItem("appointmentDetails")) || [];
    setBookings(storedBookings);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleChange = (e) => {
    setSearchBooking(e.target.value);
  };

  const handleClick = (e) => {};

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
      {bookings.length > 0 &&
        bookings.map((booking, index) => (
          <HospitalCard
            key={index}
            booking={true}
            hospital={booking.selectedHospital}
            data={booking}
          />
        ))}
    </div>
  );
};

export default MyBookings;
