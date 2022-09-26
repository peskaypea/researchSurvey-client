import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="nav">
      <a href="/" className="logo">
        <img src="logo192.png" alt="react-logo" style={{ height: "100%" }} />
      </a>
      <h1>Survey Questionnaire</h1>
    </div>
  );
}

export default Nav;
