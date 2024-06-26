import React from "react";
import style from "./HospitalCard.module.css";
import { ReactComponent as Hospital } from "../../assets/hospitalCard/hospital.svg";
import { ReactComponent as BlueTick } from "../../assets/hospitalCard/blueTick.svg";
import { ReactComponent as Like } from "../../assets/hospitalCard/like.svg";
import Button from "../button/Button";

const HospitalCard = ({ hospital }) => {
  return (
    <div className={style.hospitalCard}>
      <div className={style.leftContainer}>
        <div className={style.circle}>
          <Hospital />
        </div>
        <div className={style.blueTick}>
          <BlueTick />
        </div>
      </div>
      <div className={style.middleContainer}>
        <p>Fortis Hospital Richmond Road</p>
        <p>Banglore, Karnataka</p>
        <p>Smilessence Center for Advanced Dentistry + 1</p>
        <p>more</p>
        <p>
          FREE{" "}
          <span>
            <s>₹500</s>
          </span>
          <span>Consultation fee at clinic</span>
        </p>
        <div className={style.like}>
          <Like /> <span>5</span>
        </div>
      </div>
      <div className={style.rightContainer}>
        <p>Available Today</p>
        <Button
          children="Book FREE Center Visit"
          handleClick={() => console.log("Hi")}
          styles="primary"
          type="submit"
        />
      </div>
    </div>
  );
};

export default HospitalCard;
