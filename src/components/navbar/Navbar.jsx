import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { ReactComponent as Logo } from "../../assets/logoSvg.svg";

const Navbar = () => {
  return (
    <div>
      <header className={style.header}>
        <p>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </p>
      </header>
      <nav className={style.navbar}>
        <main className={style.navbarWrapper}>
          <div className={style.logo}>
            <Logo />
          </div>
          <div className={style.menu}>
            <ul className={style.lists}>
              <li>
                <Link to="/">Find Doctors</Link>
              </li>
              <li>
                <Link to="/">Hospitals</Link>
              </li>
              <li>
                <Link to="/">Medicines</Link>
              </li>
              <li>
                <Link to="/">Surgeries</Link>
              </li>
              <li>
                <Link to="/">Software for Provider</Link>
              </li>
              <li>
                <Link to="/">Facilities</Link>
              </li>
            </ul>
          </div>
          <div>
            <Button styles="primary">My Bookings</Button>
          </div>
        </main>
      </nav>
    </div>
  );
};

export default Navbar;
