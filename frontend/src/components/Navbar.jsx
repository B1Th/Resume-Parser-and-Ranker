import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <Link to="/parser">Resume Parser</Link>
          </li>
          <li>
            <Link to="/job">Post Job</Link>
          </li>
          <li>
            <Link to="/ranking">Ranking</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
