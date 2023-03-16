import React from "react";
import Success from "../assets/success-checkmark.png";

function SurveyResponseSuccess() {
  return (
    <div className="w-full text-center h-screen dark:bg-gradient-to-tr dark:from-[#172A46] dark:via-[#0F2746] dark:to-[#11386E] bg-gradient-to-r from-[#1D6777] via-[#218E61] to-[#13885D] ">
      <div className="mb-8 pt-8 text-sky-100 flex justify-center items-center w-full ">
        <div className="w-11/12 md:w-2/3 lg:w-1/3 rounded-xl mx-auto p-5 dark:bg-[#172A46] flex flex-col items-center mt-52 py-16">
          <h1 className="text-3xl mb-5">Survey Connect</h1>

          <img src={Success} alt="success-checkmark" className="w-32 mb-8" />

          <h3 className="text-2xl text-green-600 mb-4">Success</h3>
          <div className="text-sm">
            <p>Thank you for participating in this questionaire.</p>
            <p>
              Your response has been successfully submitted. Have a wonderful
              day!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurveyResponseSuccess;
