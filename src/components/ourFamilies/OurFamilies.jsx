import React from "react";
import style from "./OurFamilies.module.css";
import Card from "./Card";
import { ReactComponent as HappyPatients } from "../../assets/ourFamilies/happyPatients.svg";
import { ReactComponent as Hospitals } from "../../assets/ourFamilies/hospitals.svg";
import { ReactComponent as Laboratories } from "../../assets/ourFamilies/laboratories.svg";
import { ReactComponent as ExpertDoctors } from "../../assets/ourFamilies/expertDoctors.svg";

const OurFamilies = () => {
  return (
    <div className={style.ourFamilies}>
      <div className={style.leftContainer}>
        <p className={style.headOne}>
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
        </p>
        <p className={style.headTwo}>Our Families</p>
        <p className={style.mission}>
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </p>
      </div>
      <div className={style.rightContainer}>
        <div className={style.leftWrapper}>
          <Card icon={<HappyPatients />} plus="5000+" text="Happy Patients" />
          <Card icon={<Laboratories />} plus="1000+" text="Laboratories" />
        </div>
        <div className={style.rightWrapper}>
          <Card icon={<Hospitals />} plus="200+" text="Hospitals" />
          <Card icon={<ExpertDoctors />} plus="700+" text="Expert Doctors" />
        </div>
      </div>
    </div>
  );
};

export default OurFamilies;
