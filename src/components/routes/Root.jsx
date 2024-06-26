import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import style from "./Root.module.css";
import DownloadApp from "../downloadApp/DownloadApp";
import Footer from "../footer/Footer";
import { fetchStates } from "../api/Api";

const Root = () => {
  const [state, setState] = useState("");
  const [stateData, setStateData] = useState([]);
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState([]);
  const [medicalCenter, setMedicalCenter] = useState("");

  let fetchState = () => {
    try {
      let states = fetchStates();
      setStateData(states);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchState();
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet context={[stateData, setStateData]} />
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
