import React, { useState } from "react";
import Logo from "../assets/SC.svg";
import MobileNavMenu from "./MobileNavMenu";
import Switch from "./Switch";

function Nav2() {
  const token = localStorage.getItem("token");

  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  console.log(darkTheme);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="h-26 flex justify-between items-center px-10 py-2 border-b-2 shadow-2xl mb:5 md:mb-10 dark:bg-slate-600">
        <a href="/" className="md:w-60 w-1/2 z-100">
          <img src={Logo} alt="SurveyConnect" className="w-full " />
        </a>
        <div className="w-full hidden md:flex justify-end items-center">
          <div className="flex md:w-1/2 xl:w-1/3 justify-evenly">
            <a href="/" className="hover:text-green-600">
              Product
            </a>
            <a href="/" className=" hover:text-green-600">
              Solutions
            </a>
            <a href="/Pricing" className=" hover:text-green-600">
              Pricing
            </a>
            <a href="/about" className=" hover:text-green-600">
              About
            </a>
            <button onClick={toggleTheme}>
              <Switch />
            </button>
          </div>

          <div className="md:ml-4">
            {token ? (
              <div>
                <a
                  href="/dashboard"
                  className="w-28 text-center py-2 px-4 rounded-3xl text-sky-50 bg-green-600"
                >
                  Dashboard
                </a>
              </div>
            ) : (
              <div className="w-48 flex  items-center">
                <a
                  href="/login"
                  className="w-20 text-center py-1 px-4 rounded-3xl   "
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="w-24 text-center py-1 px-4 rounded-3xl text-sky-50 bg-green-600 hover:border hover:border-green-600 hover:bg-white hover:text-green-600"
                >
                  Sign Up
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="w-full md:w-0">
          <MobileNavMenu />
        </div>
      </div>
    </div>
  );
}

export default Nav2;
