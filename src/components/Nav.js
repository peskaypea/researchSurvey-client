import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../assets/SC.svg";
import "./Nav.css";

const Menu = () => (
  <>
    <p>
      <a href="#Home">Home</a>
    </p>
    <p>
      <a href="#NewSurvey">About</a>
    </p>

    <p>
      <a href="#Features">Contacts</a>
    </p>
    <p>
      <a href="#Blog">Library</a>
    </p>
  </>
);
function Nav() {
  const [toggleMenu, SetToggleMenu] = useState(false);

  return (
    // <div className="nav">
    //   <a href="/" className="logo">
    //     <img src="logo192.png" alt="react-logo" style={{ height: "100%" }} />
    //   </a>
    //   <h1>Survey Questionnaire</h1>
    // </div>
    <div className="sc__navbar">
      <div className="sc__navbar-links">
        <div className="sc__navbar-links_logo">
          <img src={logo} alt="logoFiller" />
        </div>
        <div className="sc__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="sc__navbar-sign">
        <p>Login→ </p>
        <button type="button">Sign Up</button>
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
          <div className="sc__navbar-menu_container scale-up-center">
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
