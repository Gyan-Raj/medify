import React from "react";
import style from "./FindBySpecialization.module.css";
import { ReactComponent as Dentistry } from "../../assets/findBySpecialization/dentistry.svg";
import { ReactComponent as PrimaryCare } from "../../assets/findBySpecialization/primaryCare.svg";
import { ReactComponent as Cardiology } from "../../assets/findBySpecialization/cardiology.svg";
import { ReactComponent as MriResonance } from "../../assets/findBySpecialization/mriResonance.svg";
import { ReactComponent as BloodTest } from "../../assets/findBySpecialization/bloodTest.svg";
import { ReactComponent as Piscologist } from "../../assets/findBySpecialization/piscologist.svg";
import { ReactComponent as Laboratory } from "../../assets/findBySpecialization/laboratory.svg";
import { ReactComponent as XRay } from "../../assets/findBySpecialization/xRay.svg";

const FindBySpecialization = () => {
  return (
    <div className={style.findBySpecialization}>
      <p>Find by specialisation</p>
      <div className={style.cards}>
        <div className={style.wrapper}>
          <Dentistry />
          <PrimaryCare />
          <Cardiology />
          <MriResonance />
        </div>
        <div className={style.wrapper}>
          <BloodTest />
          <Piscologist />
          <Laboratory />
          <XRay />
        </div>
      </div>
    </div>
  );
};

export default FindBySpecialization;
