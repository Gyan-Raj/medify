import React, { useState } from "react";
import style from "./Search.module.css";
import Button from "../button/Button";
import Input from "../input/Input";
import { IoIosSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { ReactComponent as Doctors } from "../../assets/youMayBeLookingFor/doctors.svg";
import { ReactComponent as Labs } from "../../assets/youMayBeLookingFor/labs.svg";
import { ReactComponent as Hospitals } from "../../assets/youMayBeLookingFor/hospitals.svg";
import { ReactComponent as MedicalStore } from "../../assets/youMayBeLookingFor/medicalStore.svg";
import { ReactComponent as Ambulance } from "../../assets/youMayBeLookingFor/ambulance.svg";

const Search = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  let handleChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    switch (name) {
      case "state":
        setState(value);
        break;
      case "city":
        setCity(value);
        break;
      default:
        return;
    }
  };
  let handleSubmit = () => {};
  return (
    <div className={style.search}>
      <div className={style.topContainer}>
        <form action="" onSubmit={handleSubmit} className={style.form}>
          <Input
            icon={<IoIosSearch />}
            type="text"
            placeholder="State"
            name="state"
            value={state}
            onChange={handleChange}
          />
          <Input
            placeholder="City"
            icon={<IoIosSearch />}
            name="city"
            value={city}
            onChange={handleChange}
          />

          <NavLink to="/">
            <Button styles="primary" type="submit">
              Search
            </Button>
          </NavLink>
        </form>
      </div>
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
    </div>
  );
};

export default Search;
