import React from "react";
import boyWithBook from "../assets/boy-with-book.svg";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();
  const checkLogin = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="sc__main-container">
        <div className="sc__main-container-info">
          <div className="sc__main-container-info-text">
            <h3>Build, Create, Connect</h3>
            <h1>
              Ask the questions <br /> that matter
            </h1>
            <p>
              Connect with your customers. Get the answers you need with Survey
              Connect!
            </p>
            <div className=" bg-cyan-900 w-1/7 px-4 py-2 border rounded-3xl text-white mt-5">
              <button onClick={checkLogin}>Get Started</button>
            </div>
          </div>
          <div className="sc__main-container-img">
            <img src={boyWithBook} alt="boy-with-book" />
          </div>
        </div>
      </div>

      {/* <div className="hand-wave">
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
      </a> */}
    </div>
  );
}

export default Welcome;
