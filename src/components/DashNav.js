import React from "react";
import "./DashNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUserCircle,
  faPlus,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/SC.svg";

function DashNav({}) {
  const bell = (
    <FontAwesomeIcon icon={faBell} size={"xl"} style={{ color: "gray" }} />
  );
  const user = (
    <FontAwesomeIcon
      icon={faUserCircle}
      size={"2xl"}
      style={{ color: "gray" }}
    />
  );
  const add = <FontAwesomeIcon icon={faPlus} size={"xs"} />;
  const menu = (
    <FontAwesomeIcon icon={faBars} size={"2xl"} style={{ color: "gray" }} />
  );

  return (
    <div>
      <div className="bg-gradient-to-r bg-white shadow-2xl  text-white h-16 shadow-xl dark:bg-sky-500 dark:text-sky-50">
        <header className="flex justify-between mx-4 h-full items-center  w-100">
          <div className="w-44 xl:w-6/12 hidden sm:block">
            <a href="/">
              <img src={Logo} alt="" className="w-100 " />
            </a>
          </div>
          <div className="sm:hidden hover:cursor-pointer">{menu}</div>

          <div className="flex dash-ul-font items-center w-56 justify-end">
            <button
              className={
                "px-2 py-2 w-36 mr-3 text-center rounded-3xl  dark:border-0 bg-gradient-to-tr from-green-600 to-sky-900 hover:bg-gradient-to-bl text-sm dark:bg-sky-500 active:border active:border-green-600 dark:hover:bg-sky-600 dark:hover:text-sky-50 "
              }
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
