import React from "react";
import style from "./Calendar.module.css";
import { DateTime } from "luxon";

const Calendar = () => {
  //   const now = DateTime.now();
  //   console.log(now);
  //   console.log(now.c);

  console.log(DateTime.now().c.day);
  console.log(DateTime.now().toRelativeCalendar());
  console.log(DateTime.now().c.day + 1);
  console.log(DateTime.now().plus({ days: 1 }).toRelativeCalendar());

  console.log();
  //   console.log(new Date().getDate());
  //   console.log(new Date().toLocaleDateString());
  //   console.log(new Date().getMonth() + 1);
  return <div className={style.calendar}></div>;
};

export default Calendar;
