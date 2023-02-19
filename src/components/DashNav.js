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

function DashNav({ theme }) {
  const bell = <FontAwesomeIcon icon={faBell} size={"xl"} />;
  const user = <FontAwesomeIcon icon={faUserCircle} size={"2xl"} />;
  const add = <FontAwesomeIcon icon={faPlus} size={"xs"} />;
  const menu = <FontAwesomeIcon icon={faBars} size={"2xl"} />;

  return (
    <div>
      <div className="bg-gradient-to-r from-green-600 to-sky-900 text-white h-16 shadow-xl dark:bg-sky-400 dark:text-sky-50">
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
                "px-2 py-2 w-36   mr-3 text-center border rounded-3xl border-sky-50 dark:border-0 hover:bg-sky-50 hover:text-black  dark:bg-sky-500 focus:ring focus:ring-slate-400 focus:outline-none dark:hover:bg-sky-600 dark:hover:text-sky-50 "
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
