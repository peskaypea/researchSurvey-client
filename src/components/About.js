import React, { useState } from "react";
import "./About.css";

import greenMountain from "../assets/GreenMountain.svg";
import blueMountain from "../assets/BlueMountain.svg";
import aboutImage from "../assets/SuveryConnect.png";

const About = ({ theme }) => {
  return (
    <div className={theme ? "dark" : ""}>
      <div className="">
        <div className="flex flex-col">
          <h1 className="flex justify-center text-4xl pt-6 dark:text-white">
            We are &nbsp;{" "}
            <h1 className="text-green-600 dark:text-sky-400">
              Survey Connect!
            </h1>
          </h1>
          <p className="flex justify-center pt-3 pb-20 text-md italic dark:text-white">
            Collecting and analyzing survey data made easier, faster and more
            efficient.
          </p>
        </div>
        <div className="flex justify-around">
          <div className="flex h-96">
            {console.log(theme)}
            <img
              src={theme === false ? greenMountain : blueMountain}
              alt="mountain"
            />
          </div>
          <div className="flex w-96 pt-15 pr-7 m-4">
            <p className="flex justify-center center text-sm italic dark:text-white">
              Our mission is to empower people with the tools they need to
              conduct effective surveys and make informed decisions.
              <br />
              <br />
              Whether you're looking to understand your customers needs,
              evaluate employee satisfaction, or gather feedback on a product or
              service, Survey Connect is the solution you need.
              <br />
              <br />
              With features like custom branding, multi-language support, and
              real-time reporting, Survey Connect provides a complete survey
              solution. Our team of experts is dedicated to providing the
              highest level of customer support, and our commitment to privacy
              and security ensures that your data is always safe and secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
