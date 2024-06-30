import React, { useState } from "react";
import style from "./Calendar.module.css";
import { Box, Tab, Tabs } from "@mui/material";
import { DateTime } from "luxon";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedDate,
  setSelectedTime,
} from "../state/hospitalsList/hospitalSlice";

const Label = ({ day, slots }) => {
  return (
    <>
      <p
        style={{
          fontFamily: "Lato",
          fontSize: "16px",
          fontWeight: "700",
          lineHeight: "22.4px",
          textAlign: "center",
          textTransform: "capitalize",
        }}
      >
        {day}
      </p>
      <p
        style={{
          fontFamily: "Lato",
          fontSize: "12px",
          fontWeight: "400",
          lineHeight: "16.8px",
          textAlign: "center",
          color: "rgba(1, 164, 0, 1)",
          textTransform: "capitalize",
        }}
      >
        {slots} slots available
      </p>
    </>
  );
};

const morningSlots = ["11:30 AM"];
const afternoonSlots = [
  "12:00 PM",
  "12:30 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
];
const eveningSlots = ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"];

const Calendar = ({ setIsSelected, isSelected }) => {
  const [value, setValue] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const selectedDate = DateTime.now()
      .plus({ days: newValue })
      .toFormat("EEE, dd MMM");
    dispatch(setSelectedDate(selectedDate));
  };

  const handleClick = (slot) => {
    dispatch(setSelectedTime(slot));
    setSelectedSlot(slot);
    setIsSelected(slot !== selectedSlot || !isSelected);
  };

  return (
    <div className={style.calendar}>
      <Box sx={{ bgcolor: "background.paper" }} className={style.calendarBox}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tab label={<Label day={"Today"} slots="11" />} />
          <Tab label={<Label day={"Tomorrow"} slots="8" />} />
          <Tab
            label={
              <Label
                day={DateTime.now().plus({ days: 2 }).toFormat("EEE, dd MMM")}
                slots="9"
              />
            }
          />
          <Tab
            label={
              <Label
                day={DateTime.now().plus({ days: 3 }).toFormat("EEE, dd MMM")}
                slots="23"
              />
            }
          />
          <Tab
            label={
              <Label
                day={DateTime.now().plus({ days: 4 }).toFormat("EEE, dd MMM")}
                slots="26"
              />
            }
          />
          <Tab
            label={
              <Label
                day={DateTime.now().plus({ days: 5 }).toFormat("EEE, dd MMM")}
                slots="30"
              />
            }
          />
          <Tab
            label={
              <Label
                day={DateTime.now().plus({ days: 6 }).toFormat("EEE, dd MMM")}
                slots="5"
              />
            }
          />
        </Tabs>
        <div className={style.slots}>
          <div className={style.slot}>
            <p className={style.title}>Morning</p>
            <div>
              {morningSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => handleClick(slot)}
                  style={{
                    backgroundColor:
                      selectedSlot === slot && isSelected
                        ? "rgba(42, 167, 255, 1)"
                        : "",
                    color:
                      selectedSlot === slot && isSelected
                        ? "white"
                        : "rgba(42, 167, 255, 1)",
                  }}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
          <div className={style.slot}>
            <p className={style.title}>Afternoon</p>
            <div>
              {afternoonSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => handleClick(slot)}
                  style={{
                    backgroundColor:
                      selectedSlot === slot && isSelected
                        ? "rgba(42, 167, 255, 1)"
                        : "",
                    color:
                      selectedSlot === slot && isSelected
                        ? "white"
                        : "rgba(42, 167, 255, 1)",
                  }}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
          <div className={style.slot}>
            <p className={style.title}>Evening</p>
            <div>
              {eveningSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => handleClick(slot)}
                  style={{
                    backgroundColor:
                      selectedSlot === slot && isSelected
                        ? "rgba(42, 167, 255, 1)"
                        : "",
                    color:
                      selectedSlot === slot && isSelected
                        ? "white"
                        : "rgba(42, 167, 255, 1)",
                  }}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Calendar;
