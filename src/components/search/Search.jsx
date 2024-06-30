import React, { useEffect } from "react";
import style from "./Search.module.css";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/search/icon.svg";
import { ReactComponent as Doctors } from "../../assets/youMayBeLookingFor/doctors.svg";
import { ReactComponent as Labs } from "../../assets/youMayBeLookingFor/labs.svg";
import { ReactComponent as Hospitals } from "../../assets/youMayBeLookingFor/hospitals.svg";
import { ReactComponent as MedicalStore } from "../../assets/youMayBeLookingFor/medicalStore.svg";
import { ReactComponent as Ambulance } from "../../assets/youMayBeLookingFor/ambulance.svg";
import Select from "../selectInput/Select";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStatesList,
  fetchCitiesList,
  fetchHospitalsList,
  setSelectedState,
  setSelectedCity,
} from "../state/hospitalsList/hospitalSlice";

const Search = ({ home }) => {
  const states = useSelector((state) => state.hospital.statesList);
  const cities = useSelector((state) => state.hospital.citiesList);
  const selectedState = useSelector((state) => state.hospital.selectedState);
  const selectedCity = useSelector((state) => state.hospital.selectedCity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatesList());
    if (selectedState) {
      dispatch(fetchCitiesList(selectedState));
    }
    if (selectedState && selectedCity) {
      dispatch(
        fetchHospitalsList({ state: selectedState, city: selectedCity })
      );
    }
  }, [dispatch, selectedState, selectedCity]);

  let handleChange = (e) => {
    let { name, value } = e.target;
    switch (name) {
      case "state":
        dispatch(setSelectedState(value));
        break;
      case "city":
        dispatch(setSelectedCity(value));
        break;
      default:
        break;
    }
  };

  // let handleChange = (e) => {
  //   let { name, value } = e.target;
  //   if (name === "state") {
  //     console.log("Selected State:", value);
  //     dispatch(setSelectedState(value));
  //   } else if (name === "city") {
  //     console.log("Selected City:", value);
  //     dispatch(setSelectedCity(value));
  //   }
  // };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (selectedState && selectedCity) {
      dispatch(
        fetchHospitalsList({ state: selectedState, city: selectedCity })
      );
    }
  };

  return (
    <div className={style.search}>
      <div className={style.topContainer}>
        <form className={style.form} onSubmit={handleSubmit}>
          <Select
            icon={<SearchIcon />}
            name="state"
            value={selectedState}
            data={states}
            onChange={handleChange}
            styles="state"
          />
          <Select
            icon={<SearchIcon />}
            name="city"
            value={selectedCity}
            data={cities}
            onChange={handleChange}
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
