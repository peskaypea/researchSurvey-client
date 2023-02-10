import React from "react";
import "./About.css";
import Navbar from "./Nav";
import aboutImage from "../assets/SuveryConnect.png";

const About = ({ theme }) => {
  return (
    <div className={theme ? "dark" : ""}>
      <div className="">
        <div className="flex justify-center">
          <h1 className="text-4xl text-cyan-800 ">
            Welcome to Survey Connect!
          </h1>
        </div>
        <div className="flex justify-center m-7 mt-24">
          <div className="w-80 flex items-center">
            <p className="text-xl">
              We're here to help you quickly and easily create surveys that can
              help you better understand your customers and make better
              decisions for your business. With Survey Connect, you can create
              custom surveys, gather real-time feedback, analyze data and make
              informed decisions.
            </p>
          </div>
          <img src={aboutImage} alt="aboutImg" className="w-72 ml-12" />
        </div>
        <div className="flex pt-3 pb-3 justify-center bg-cyan-800">
          <p className=" flex justify-center text-lg text-white text-center w-2/3">
            Decades of experience in survey design, data analysis and customer
            service. We understand the importance of providing you with
            high-quality insights that can help you make better decisions.
          </p>
        </div>
      </div>

      {/* <div className="about__container">
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
          <div>
            <img className="about-img" src={aboutImage} alt="" />
          </div>
        </div>
      </div>

      <div className="about__container-bottom">
        <div className="container-bottom-div">
          <img src={carolPic} alt="profilepic" />
          <div className="about__review-name">
            <h3>Carol, Makret Researcher</h3>
          </div>
          <div className="about__review-text">
            <p>“Survey Connect is the perfect tool for my business.”</p>
          </div>
        </div>

        <div className="container-bottom-div">
          <img src={jillPic} alt="profilepic" />
          <div className="about__review-name">
            <h3>Jill, Product Manager</h3>
          </div>
          <div className="about__review-text">
            <p>
              “I love the real-time data it provides me with and it's easy to
              use.”
            </p>
          </div>
        </div>

        <div className="container-bottom-div">
          <img src={johnPic} alt="profilepic" />
          <div className="about__review-name">
            <h3>John, Small Business Owner</h3>
          </div>
          <div className="about__review-text">
            <p>
              “Survey Connect is a great tool for getting valuable customer
              feedback!”
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
