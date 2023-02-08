import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function MobileNavMenu() {
  const token = localStorage.getItem("token");

  const mobileMenu = (
    <FontAwesomeIcon icon={faBars} size={"lg"}></FontAwesomeIcon>
  );
  const menuCloseBtn = (
    <FontAwesomeIcon icon={faXmark} size={"lg"}></FontAwesomeIcon>
  );

  const [collapse, setCollapse] = useState(true);
  const collapseMenu = () => {
    setCollapse(!collapse);
  };
  return (
    <div className="relative w-1/3 bg-slate-900/75  ">
      {collapse ? (
        <div
          className="block md:hidden text-end"
          onClick={() => {
            collapseMenu();
          }}
        >
          {mobileMenu}
        </div>
      ) : (
        <div
          className="block md:hidden text-end"
          onClick={() => {
            collapseMenu();
          }}
        >
          {menuCloseBtn}
          <div className="absolute w-full bg-slate-900/75  h-screen text-center pt-5">
            <div className="flex flex-col">
              <a href="/" className="p-2">
                Product
              </a>
              <a href="/" className="p-2">
                Solutions
              </a>
              <a href="/" className=" p-2">
                Pricing
              </a>
              <a href="/about" className="p-2 ">
                About
              </a>
            </div>
            <div className="">
              {token ? (
                <div>
                  <a href="/dashboard" className="">
                    Dashboard
                  </a>
                </div>
              ) : (
                <div className="">
                  <a href="/login" className=" ">
                    Login
                  </a>
                  <a href="/register" className="">
                    Sign Up
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNavMenu;
