import React from "react";
import style from "./MedicalCenters.module.css";
import img from "../../../assets/adCard/sensodyne_dweb.png.png";
import SearchBar from "./searchBar/SearchBar";
import { ReactComponent as Tick } from "../../../assets/hospitalCard/tick.svg";

import data from "./db.json";
import HospitalCard from "../../hospitalCard/HospitalCard";

const MedicalCenters = () => {
  return (
    <div className={style.medicalCenters}>
      <div className={style.topContainer}>
        <SearchBar />
      </div>
      <div className={style.bottomContainer}>
        <div className={style.leftContainer}>
          {data && (
            <>
              <p className={style.noOfMedicalCenters}>
                {data.length} medical {data.length > 1 ? "centers" : "center"}{" "}
                available in Alaska
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
              {data.map((ele) => {
                return <HospitalCard hospital={ele} />;
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