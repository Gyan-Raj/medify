import React, { useState } from "react";
import style from "./Search.module.css";
import Button from "../button/Button";
import { NavLink, useOutletContext } from "react-router-dom";
import { ReactComponent as Doctors } from "../../assets/youMayBeLookingFor/doctors.svg";
import { ReactComponent as Labs } from "../../assets/youMayBeLookingFor/labs.svg";
import { ReactComponent as Hospitals } from "../../assets/youMayBeLookingFor/hospitals.svg";
import { ReactComponent as MedicalStore } from "../../assets/youMayBeLookingFor/medicalStore.svg";
import { ReactComponent as Ambulance } from "../../assets/youMayBeLookingFor/ambulance.svg";
import Select from "../selectInput/Select";
import { ReactComponent as SearchIcon } from "../../assets/search/icon.svg";

const Search = ({ home, stateData, setStateData }) => {
  return (
    <div className={style.search}>
      <div className={style.topContainer}>
        <form
          action=""
          //  onSubmit={handleSubmit}
          className={style.form}
        >
          <Select
            icon={<SearchIcon />}
            name="state"
            data={stateData}
            // onChange={setStateData((e) => e.target.value)}
            selectedValue="State"
            styles="state"
          />
          <Select
            icon={<SearchIcon />}
            name="city"
            // value={city}
            // onChange={handleChange}
            selectedValue="City"
            styles="city"
          />

          <NavLink to="/medical-centers">
            <Button styles="primary" type="submit">
              Search
            </Button>
          </NavLink>
        </form>
      </div>
      {home && (
        <>
          <div className={style.middleContainer}>
            <p>You may be looking for</p>
          </div>
          <div className={style.bottomContainer}>
            <Doctors />
            <Labs />
            <Hospitals />
            <MedicalStore />
            <Ambulance />
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
