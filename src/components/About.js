import React from "react";
import "./About.css";
import Navbar from "./Nav";
import aboutImage from "../assets/about-us.gif";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about__container">
        <div className="about__container-top">
          <div className="about__top-info">
            <div className="about__top-head">
              <h1>Welcome to Survey Connect!</h1>
              <p>
                We're here to help you quickly and easily create surveys that
                can help you better understand your customers and make better
                decisions for your business. With Survey Connect, you can create
                custom surveys, gather real-time feedback, analyze data and make
                informed decisions.
              </p>
            </div>
            <div className="about__top-tail">
              <h3>Our team of survey experts</h3>
              <p>
                has decades of experience in survey design, data analysis and
                customer service. We understand the importance of providing you
                with high-quality insights that can help you make better
                decisions.
              </p>
            </div>
          </div>
          <img className="about-img" src={aboutImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
