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
  const token = localStorage.getItem("token");
  return (
    <div className="w-vw flex justify-between h-24">
      {/* logo and main nav */}
      <div className="flex justify-between w-1/3 ml-10 md:ml-0 text-xl items-center">
        {/* logo */}
        <div className=" xl:w-1/3 w-full  mx-auto">
          <img src={logo} alt="logoFiller" className="h-full w-full mx-auto" />
        </div>
        {/* main nav */}
        <div className=" justify-evenly w-1/2 gap-5 hidden xl:flex">
          <div>
            <a href="/">Home</a>
          </div>
          <div>
            <a href="/about">About</a>
          </div>
          <div>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
      {/* dashboard button and hidden menu */}
      <div className="w-2/3 flex justify-end h-full ">
        {token && (
          <div className="hidden xl:flex mx-10 h-full  items-center ">
            <a
              className="w-28 flex justify-center items-center h-10 rounded-xl bg-cyan-800 text-sky-50 hover:bg-white hover:text-cyan-800 hover:border-cyan-800 hover:border"
              href="/dashboard"
            >
              Dashboard
            </a>
          </div>
        )}
        {!token && (
          <div className="sc__navbar-sign ">
            <a className="navbar__login px-5" href="/login">
              Login→{" "}
            </a>
            <a
              href="/register"
              className="w-full bg-cyan-800 p-2 rounded-xl text-white px-5"
            >
              Sign Up
            </a>
          </div>
        )}
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
