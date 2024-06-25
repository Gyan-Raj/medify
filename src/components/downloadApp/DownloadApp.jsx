import React from "react";
import style from "./DownloadApp.module.css";
import { ReactComponent as Arrow } from "../../assets/downloadApp/arrow.svg";
import { ReactComponent as GooglePlay } from "../../assets/downloadApp/googlePlay.svg";
import { ReactComponent as AppleStore } from "../../assets/downloadApp/appleStore.svg";
import Input from "../input/Input";
import Button from "../button/Button";
import mobile from "../../assets/downloadApp/mobile.jpg";

const DownloadApp = () => {
  return (
    <div className={style.downloadApp}>
      <div className={style.leftContainer}>
        <img src={mobile} alt="" />
      </div>
      <div className={style.middleContainer}>
        <Arrow />
      </div>
      <div className={style.rightContainer}>
        <p className={style.download}>
          Download the
          <br />
          <span style={{ color: "rgba(42, 167, 255, 1)" }}>Medify</span> App
        </p>
        <p className={style.link}>Get the link to download the app</p>
        <div style={{ display: "flex" }}>
          <Input
            type="text"
            disabled="true"
            placeholder="+91"
            styles="disabled"
            value=""
          />
          <Input type="text" placeholder="Enter phone number" />
          <div style={{ marginLeft: "1rem" }}>
            <Button styles="primary" children="Send SMS" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "3rem",
          }}
        >
          <GooglePlay />
          <AppleStore />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
