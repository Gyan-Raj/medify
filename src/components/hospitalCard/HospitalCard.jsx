import React, { useState } from "react";
import style from "./HospitalCard.module.css";
import { ReactComponent as Hospital } from "../../assets/hospitalCard/hospital.svg";
import { ReactComponent as BlueTick } from "../../assets/hospitalCard/blueTick.svg";
import { ReactComponent as Like } from "../../assets/hospitalCard/like.svg";
import Button from "../button/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Calendar from "../calendar/Calendar";
import SlotInput from "../input/SlotInput";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedHospital } from "../state/hospitalsList/hospitalSlice";

const HospitalCard = ({ hospital, booking }) => {
  const [expanded, setExpanded] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  let dispatch = useDispatch();
  const selectedHospital = useSelector(
    (state) => state.hospital.selectedHospital
  );
  let handleClick = () => {
    setExpanded(!expanded);
    console.log(selectedHospital);
  };
  return (
    <div className={style.hospitalCard}>
      <Accordion className={style.accordian} expanded={expanded}>
        <AccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={style.leftContainer}>
            <div className={style.circle}>
              <Hospital />
            </div>
            <div className={style.blueTick}>
              <BlueTick />
            </div>
          </div>
          <div className={style.middleContainer}>
            <p className={style.name}>{hospital["Hospital Name"]}</p>
            <p className={style.address}>
              {hospital["Address"]}, {hospital["City"]}
            </p>
            <p className={style.type}>
              {hospital["Hospital Type"]} + 1 <br />
              more
            </p>
            {!booking && (
              <>
                <p className={style.free}>
                  FREE{" "}
                  <span className={style.fee}>
                    <s>₹500</s>
                  </span>
                  <span className={style.clinic}>
                    Consultation fee at clinic
                  </span>
                </p>
              </>
            )}
            <div className={style.likeContainer}>
              <div className={style.like}>
                <Like /> <span className={style.five}>5</span>
              </div>
            </div>
          </div>
          <div
            className={
              !booking ? style.rightContainer : style.rightContainerBooking
            }
          >
            {!booking ? (
              <>
                <p className={style.available}>Available Today</p>
                <Button
                  children="Book FREE Center Visit"
                  handleClick={handleClick}
                  styles="book"
                  type="submit"
                />
              </>
            ) : (
              <div>
                <SlotInput
                  type="text"
                  name="time"
                  value="time "
                  disabled
                  styles="time"
                />
                <SlotInput
                  type="text"
                  name="date"
                  value="date "
                  disabled
                  styles="date"
                />
              </div>
            )}
          </div>
        </AccordionSummary>
        {booking ? (
          ""
        ) : (
          <AccordionDetails className={style.accordianSummary}>
            <Calendar isSelected={isSelected} setIsSelected={setIsSelected} />
          </AccordionDetails>
        )}
      </Accordion>
    </div>
  );
};

export default HospitalCard;
