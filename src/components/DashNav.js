import React, { useState } from "react";
import "./DashNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUserCircle,
  faPlus,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/SC.svg";

function DashNav() {
  const bell = <FontAwesomeIcon icon={faBell} size={"xl"} />;
  const user = <FontAwesomeIcon icon={faUserCircle} size={"2xl"} />;
  const add = <FontAwesomeIcon icon={faPlus} size={"xs"} />;
  const menu = <FontAwesomeIcon icon={faBars} size={"2xl"} />;

  const [tabActive, setTabActive] = useState("Surveys");
  const [btnColorChange, setBtnColorChange] = useState(false);

  const changeTab = (e) => {
    setTabActive(e.target.value);
  };

  return (
    <div>
      <div className="bg-cyan-800 text-white h-16">
        <header className="flex justify-between mx-4 h-full items-center  w-100">
          <div className="w-44 xl:w-6/12 hidden sm:block">
            <a href="/">
              <img src={Logo} alt="" className="w-100" />
            </a>
          </div>
          <div className="sm:hidden hover:cursor-pointer">{menu}</div>

          <nav className=" sm:flex md:flex-row-reverse hidden mr-3  ">
            <ul className="w-100 dash-ul-font sm:ml-5">
              <button
                className={
                  tabActive === "Surveys"
                    ? "px-4 py-1 dash-active"
                    : "px-4 py-1 "
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
                  tabActive === "Feature"
                    ? "px-4 py-1 dash-active"
                    : "px-4 py-1 "
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
          <div className="flex dash-ul-font items-center w-56 justify-end">
            <button
              className={
                btnColorChange
                  ? "px-2 py-2 w-36   mr-3 text-center border rounded-3xl border-transparent bg-white text-cyan-900 focus:ring focus:ring-slate-400 focus:outline-none"
                  : "px-2 py-2 w-36   mr-3  text-center border rounded-3xl border-white text-slade-100 focus:ring focus:white focus:outline-none"
              }
              onMouseEnter={() => setBtnColorChange(true)}
              onMouseLeave={() => setBtnColorChange(false)}
            >
              <div className="flex justify-center focus:ring focus:white ">
                <div className="mr-1">{add}</div>
                <div>New Survey</div>
              </div>
            </button>
            <div className="flex justify-content-evenly ">
              <button className="pt-1">{bell}</button>
              <a href="/user" className="px-3 flex pt-1 align-top">
                {user}
              </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default DashNav;
