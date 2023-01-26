import React, { useState } from "react";
import "./DashNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUserCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function DashNav() {
  const bell = <FontAwesomeIcon icon={faBell} size={"xl"} />;
  const user = <FontAwesomeIcon icon={faUserCircle} size={"2xl"} />;
  const add = <FontAwesomeIcon icon={faPlus} />;
  const [tabActive, setTabActive] = useState("Surveys");
  const [btnColorChange, setBtnColorChange] = useState(false);

  const changeTab = (e) => {
    console.log(e.target.value);
    setTabActive(e.target.value);
  };

  return (
    <div className="dashNavContainer">
      <header className="flex justify-between mx-4 h-full items-center  w-100">
        <div className="w-1/12">Logo</div>
        <nav className=" flex flex-row-reverse  w-8/12">
          <ul className="w-100 dash-ul-font">
            <button
              className={
                tabActive === "Surveys" ? "px-4 py-1 dash-active" : "px-4 py-1 "
              }
              onClick={(e) => {
                changeTab(e);
              }}
              value={"Surveys"}
            >
              Surveys
            </button>
            <button
              className={
                tabActive === "Statistics"
                  ? "px-4 py-1 dash-active"
                  : "px-4 py-1 "
              }
              value={"Statistics"}
              onClick={(e) => {
                changeTab(e);
              }}
            >
              Statistics
            </button>
            <button
              className={
                tabActive === "Feature" ? "px-4 py-1 dash-active" : "px-4 py-1 "
              }
              value={"Feature"}
              onClick={(e) => {
                changeTab(e);
              }}
            >
              Feature
            </button>
          </ul>
        </nav>
        <div className="flex dash-ul-font items-center w-2/12 justify-around">
          <button
            className={
              btnColorChange
                ? "px-2 py-2 w-1/2 text-center border rounded-3xl border-transparent bg-white text-cyan-900"
                : "px-2 py-2 w-1/2 text-center border rounded-3xl border-white text-slade-100"
            }
            onMouseEnter={() => setBtnColorChange(true)}
            onMouseLeave={() => setBtnColorChange(false)}
          >
            <div className="flex justify-center">
              <div className="mr-1 ">{add}</div>
              <div>New Survey</div>
            </div>
          </button>
          <div className="flex justify-content-evenly ">
            <button className="pt-1">{bell}</button>
            <button className="px-3 pt-1">{user}</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default DashNav;
