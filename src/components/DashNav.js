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
import LogoWhite from "../assets/SCWhite.svg";

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
      <div className="bg-gradient-to-r bg-white   text-white h-16 shadow-xl dark:bg-gradient-to-r dark:from-[#09192F] dark:to-[#172A46] dark:text-sky-50">
        <header className="flex justify-between mx-4 h-full items-center  w-100">
          <div className="w-44 xl:w-6/12 hidden sm:block">
            <a href="/">
              <img src={theme ? LogoWhite : Logo} alt="" className="w-100 " />
            </a>
          </div>
          <div className="sm:hidden hover:cursor-pointer">{menu}</div>

          <div className="flex dash-ul-font items-center w-56 justify-end">
            <button
              className={
                "px-2 py-2 w-36   mr-3 text-center border rounded-3xl border-sky-50 dark:border-0 hover:bg-green-200  bg-gradient-to-tr from-green-600 to-sky-900  hover:bg-gradient-to-bl hover:cursor-pointer"

                // border dark:border-0 h-8 md:h-10 w-16 py-1 sm:py-2 px-5 rounded-3xl text-white bg-gradient-to-tr from-green-600 to-sky-900 hover:bg-gradient-to-bl hover:cursor-pointer w-28 flex justify-center items-center md:w-28 dark:bg-sky-700 dark:hover:bg-sky-600
              }
            >
              <div className="flex justify-center focus:ring focus:white">
                <div className="mr-1">{add}</div>
                <div>New Survey</div>
              </div>
            </button>
            <div className="flex justify-content-evenly ">
              <button className="pt-1 hover:text-green-200 dark:hover:text-sky-600">
                {bell}
              </button>
              <a
                href="/user"
                className="px-3 flex pt-1 align-top hover:text-green-200 dark:hover:text-sky-600"
              >
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
