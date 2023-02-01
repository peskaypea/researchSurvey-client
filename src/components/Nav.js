import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../assets/SC.svg";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Menu = () => (
  <nav className="nav-nav">
    <ul>
      <li>
        <NavLink className="nav-nav-link" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-nav-link" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-nav-link" to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

function Nav() {
  const [toggleMenu, SetToggleMenu] = useState(false);

  return (
    <div className="sc__navbar">
      <div className="sc__navbar-links">
        <div className="sc__navbar-links_logo">
          <img src={logo} alt="logoFiller" />
        </div>
        <div className="sc__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="sc__navbar-sign ">
        <a className="navbar__login px-5" href="/login">
          Login→{" "}
        </a>
        <a
          href="/register"
          className="w-full bg-cyan-900 p-2 rounded-xl text-sky-100 px-5"
        >
          Sign Up
        </a>
      </div>
      <div className="sc__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000000"
            size={27}
            onClick={() => SetToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000000"
            size={27}
            onClick={() => SetToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="sc__navbar-menu_container">
            <div className="sc__navbar-menu_container-links">
              <Menu />
              <div className="sc__navbar-menu_container-links-sign">
                <p>Login→ </p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
