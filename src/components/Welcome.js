import React from "react";
import boyWithBook from "../assets/boy-with-book.svg";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();
  const checkLogin = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="sc__main-container">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="sc__main-container-info-text">
            <h3>Build, Create, Connect</h3>
            <h1>
              Ask the questions <br /> that matter
            </h1>
            <p>
              Connect with your customers. Get the answers you need with Survey
              Connect!
            </p>
            <div className="flex">
              <button
                className=" bg-cyan-800 w-1/7 px-4 py-2 border rounded-3xl text-white mt-5 mx-2 hover:bg-white hover:text-cyan-800 hover:border-cyan-800 hover:cursor-pointer"
                onClick={checkLogin}
              >
                Get Started
              </button>

              <button
                className=" border-cyan-900 w-1/7 px-4 py-2 border rounded-3xl text-cyan-900 mt-5 hover:text-white hover:bg-cyan-800 mx-2 hover:cursor-pointer"
                onClick={checkLogin}
              >
                Take Survey
              </button>
            </div>
          </div>
          <div className="w-1/2 mx-auto md:mx-0 lg:w-1/4 flex justify-center items-center">
            <img
              src={boyWithBook}
              alt="boy-with-book"
              className="sm:w-1/2 md:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
