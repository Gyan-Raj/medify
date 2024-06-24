import React from "react";
import style from "./Hoarding.module.css";
import { ReactComponent as DoctorsImage } from "../../assets/docotosImage.svg";
import Button from "../button/Button";

const Hoarding = () => {
  return (
    <div className={style.hoarding}>
      <div className={style.container}>
        <div className={style.leftContainer}>
          <div className={style.topContainer}>
            <p>
              Skip the travel! Find Online
              <br />
              <span style={{ color: "rgba(0, 0, 0, 1)" }}>Medical</span>
              <span style={{ color: "rgba(42, 167, 255, 1)" }}>Centers</span>
            </p>
          </div>
          <div className={style.middleContainer}>
            <p>
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </p>
          </div>
          <div className={style.bottomContainer}>
            <Button type="button" styles="primary">
              Find Centers
            </Button>
          </div>
        </div>
        <div className={style.rightContainer}>
          <div>
            <DoctorsImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hoarding;
