import React from "react";
import style from "./Footer.module.css";
import { ReactComponent as Logo } from "../../assets/logoSvg.svg";
import { ReactComponent as Facebook } from "../../assets/footer/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/footer/twitter.svg";
import { ReactComponent as Youtube } from "../../assets/footer/youtube.svg";
import { ReactComponent as Pinterest } from "../../assets/footer/pinterest.svg";

let listOne = [
  "About Us",
  "Our Pricing",
  "Our Gallery",
  "Appointment",
  "Privacy Policy",
];
let listTwo = [
  "Orthology",
  "Neurology",
  "Dental Care",
  "Opthalmology",
  "Cardiology",
];

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.topContainer}>
        <div className={style.leftContainer}>
          <div className={style.logo}>
            <Logo />
          </div>
          <div className={style.socialMedia}>
            <div>
              <Facebook />
            </div>
            <div>
              <Twitter />
            </div>
            <div>
              <Youtube />
            </div>
            <div>
              <Pinterest />
            </div>
          </div>
        </div>
        <div className={style.rightContainer}>
          <div>
            <ul>
              {listOne &&
                listOne.map((ele) => {
                  return <li>{ele}</li>;
                })}
            </ul>
          </div>
          <div>
            <ul>
              {listTwo &&
                listTwo.map((ele) => {
                  return <li>{ele}</li>;
                })}
            </ul>
          </div>
          <div>
            <ul>
              {listOne &&
                listOne.map((ele) => {
                  return <li>{ele}</li>;
                })}
            </ul>
          </div>
        </div>
      </div>
      <div className={style.bottomContainer}>
        <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
