import React, { useState } from "react";
import style from "./Calendar.module.css";
import { Box, Tab, Tabs } from "@mui/material";
import { DateTime } from "luxon";
import SlotInput from "../input/SlotInput";

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

let morningSlots = ["11:30 AM"];
let afternoonSlots = [
  "12:00 PM",
  "12:30 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
];
let eveningSlots = ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"];

const Calendar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          <Tab
            label={
              <Label day={DateTime.now().toFormat("EEE, dd MMM")} slots="11" />
            }
          />
          <Tab
            label={
              <Label
                day={DateTime.now().plus({ days: 1 }).toFormat("EEE, dd MMM")}
                slots="8"
              />
            }
          />
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
        <table>
          <tr>
            <td>
              {morningSlots && (
                <p
                  style={{
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "19.6px",
                    textAlign: "left",
                    color: "rgba(65, 65, 70, 1)",
                  }}
                >
                  Morning
                </p>
              )}
            </td>
            {morningSlots &&
              morningSlots.map((slot) => {
                return (
                  <td>
                    <div style={{ display: "flex" }}>
                      <SlotInput
                        type="text"
                        name={slot}
                        value={slot}
                        styles="slots"
                        disabled={true}
                      />
                    </div>
                  </td>
                );
              })}
          </tr>
          <tr>
            <td>
              {afternoonSlots && (
                <p
                  style={{
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "19.6px",
                    textAlign: "left",
                    color: "rgba(65, 65, 70, 1)",
                  }}
                >
                  Afternoon
                </p>
              )}
            </td>
            {afternoonSlots &&
              afternoonSlots.map((slot) => {
                return (
                  <td>
                    <div style={{ display: "flex" }}>
                      <SlotInput
                        type="text"
                        name={slot}
                        value={slot}
                        styles="slots"
                        disabled={true}
                      />
                    </div>
                  </td>
                );
              })}
          </tr>
          <tr>
            <td>
              {eveningSlots && (
                <p
                  style={{
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "19.6px",
                    textAlign: "left",
                    color: "rgba(65, 65, 70, 1)",
                  }}
                >
                  Evening
                </p>
              )}
            </td>
            {eveningSlots &&
              eveningSlots.map((slot) => {
                return (
                  <td>
                    <div style={{ display: "flex" }}>
                      <SlotInput
                        type="text"
                        name={slot}
                        value={slot}
                        styles="slots"
                        disabled={true}
                      />
                    </div>
                  </td>
                );
              })}
          </tr>
        </table>
      </Box>
    </div>
  );
};

export default Calendar;
