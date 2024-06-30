import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { Outlet, useSearchParams } from "react-router-dom";
import style from "./Root.module.css";
import DownloadApp from "../downloadApp/DownloadApp";
import Footer from "../footer/Footer";
// import { fetchStates, fetchCities, fetchHospitals } from "../api/Api";

const Root = () => {
  // const [statesList, setStatesList] = useState([]);
  // const [citiesList, setCitiesList] = useState([]);
  // const [hospitalsList, setHospitalsList] = useState([]);

  // let fetchStatesList = () => {
  //   try {
  //     let response = fetchStates();
  //     // console.log(5);
  //     setStatesList(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // let fetchCitiesList = () => {
  //   try {
  //     let response = fetchCities("Alabama");
  //     setCitiesList(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // let fetchHospitalsList = () => {
  //   try {
  //     let response = fetchHospitals("Alabama", "DOTHAN");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   fetchStatesList();
  //   // fetchCitiesList();
  //   // fetchHospitalsList();
  // }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className={style.downloadApp}>
          <DownloadApp />
        </div>
        <div className={style.footer}>
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Root;
