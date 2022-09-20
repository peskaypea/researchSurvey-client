import React from "react";
import "./Welcome.css";
function Welcome(props) {
  return (
    <div className="welcome-container">
      <div className="hand-wave">
        <img src="wave.gif" alt="hand-wave" className="hand-wave" />
      </div>
      <h3>Welcome</h3>
      <p>
        Thank you for participating the research project. All personal
        information collected by this research is done so exclusively with your
        consent
      </p>
      <a className="btn btn-primary" href="/getstarted">
        Get Started
      </a>
    </div>
  );
}

export default Welcome;
