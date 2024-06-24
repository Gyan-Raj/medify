import React from "react";
import style from "./FreeConsultation.module.css";
import { ReactComponent as Phone } from "../../assets/freeConsultation/phone.svg";
import { ReactComponent as TopImage } from "../../assets/freeConsultation/topImage.svg";
import { ReactComponent as BottomImage } from "../../assets/freeConsultation/bottomImage.svg";

const FreeConsultation = () => {
  return (
    <div className={style.freeConsultation}>
      <div className={style.leftContainer}>
        <div className={style.call}>
          <div>
            <Phone />
            <p>Free Consultation</p>
          </div>
          <p>Consultation with the best</p>
        </div>
        <div className={style.topImage}>
          <TopImage />
        </div>
        <div className={style.bottomImage}>
          <BottomImage />
        </div>
      </div>
      <div className={style.rightContainer}>
        <p className={style.headOne}>
          HELPING PATIENTS FROM AROUND THE GLOBE!!
        </p>
        <p className={style.headTwo}>
          Patient <span style={{ color: "rgba(42, 167, 255, 1)" }}>Caring</span>
        </p>
        <p className={style.moto}>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </p>
        <ul>
          <li>Stay Updated About Your Health</li>
          <li>Check Your Results Online</li>
          <li>Manage Your Appointments</li>
        </ul>
      </div>
    </div>
  );
};

export default FreeConsultation;
