import React from "react";
import style from "./MedicalCenters.module.css";
import img from "../../../assets/adCard/sensodyne_dweb.png.png";
import SearchBar from "./searchBar/SearchBar";
import { ReactComponent as Tick } from "../../../assets/hospitalCard/tick.svg";

import HospitalCard from "../../hospitalCard/HospitalCard";
import { useSelector } from "react-redux";

const MedicalCenters = () => {
  const hospitals = useSelector((state) => state.hospital.hospitalsList);
  const selectedCity = useSelector((state) => state.hospital.selectedCity);
  return (
    <div className={style.medicalCenters}>
      <div className={style.topContainer}>
        <SearchBar home={false} booking={false} />
      </div>
      <div className={style.bottomContainer}>
        <div className={style.leftContainer}>
          {hospitals && (
            <>
              <p className={style.noOfMedicalCenters}>
                {hospitals.length} medical{" "}
                {hospitals.length > 1 ? "centers" : "center"} available in{" "}
                {selectedCity}
              </p>
              <div className={style.detailsContainer}>
                <div className={style.tick}>
                  <Tick />
                </div>
                <span className={style.details}>
                  Book appointments with minimum wait-time & verified doctor
                  details
                </span>
              </div>
              {hospitals.map((ele) => {
                return <HospitalCard hospital={ele} booking={false} />;
              })}
            </>
          )}
        </div>
        <div className={style.rightContainer}>
          <img src={img} alt="Sensodyne" />
        </div>
      </div>
    </div>
  );
};

export default MedicalCenters;
