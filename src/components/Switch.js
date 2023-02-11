import React, { useState } from "react";
import Moon from "../assets/Moon.svg";
import Sun from "../assets/Sun.svg";

function Switch() {
  const [active, setActive] = useState(true);

  const handleChangeActive = () => {
    setActive((previousIcon) => {
      return !previousIcon;
    });
  };

  const [toggle, setToggle] = useState(true);

  const toggleClass = " transform translate-x-5";
  return (
    <div>
      <div
        className="md:w-11 md:h-6 w-7 h-6 flex items-center bg-gray-200 rounded-full p-1 cursor-pointer dark:bg-slate-400"
        onClick={() => {
          setToggle(!toggle);
          handleChangeActive();
        }}
      >
        {/* Switch */}

        <div
          className={
            "bg-white md:w-4 md:h-4 h-3 w-2 rounded-full shadow-md transform duration-300 ease-in-out flex justify-center align-center dark:bg-slate-300" +
            (toggle ? null : toggleClass)
          }
        >
          {active ? (
            <img className="active w-3" src={Sun} alt="Sun" />
          ) : (
            <img className="inactive w-3" src={Moon} alt="Moon" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Switch;