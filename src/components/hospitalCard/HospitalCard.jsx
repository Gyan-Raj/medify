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

const HospitalCard = ({ hospital }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={style.hospitalCard}>
      <Accordion expanded={expanded}>
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
            <p className={style.free}>
              FREE{" "}
              <span className={style.fee}>
                <s>₹500</s>
              </span>
              <span className={style.clinic}>Consultation fee at clinic</span>
            </p>
            <div className={style.likeContainer}>
              <div className={style.like}>
                <Like /> <span className={style.five}>5</span>
              </div>
            </div>
          </div>
          <div className={style.rightContainer}>
            <p className={style.available}>Available Today</p>
            <Button
              children={expanded ? "Cancel" : "Book FREE Center Visit"}
              handleClick={() => setExpanded(!expanded)}
              styles="book"
              type="submit"
            />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Calendar />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default HospitalCard;
