import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { Outlet, useSearchParams } from "react-router-dom";
import style from "./Root.module.css";
import DownloadApp from "../downloadApp/DownloadApp";
import Footer from "../footer/Footer";
import axios from "axios";

const Root = () => {
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
