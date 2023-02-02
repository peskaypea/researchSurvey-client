import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
function QuestionCard({ survey, error, loading }) {
  const home = <FontAwesomeIcon icon={faHome} />;

  const [questionNum, setQuestionNum] = useState(0);
  const nextQuestion = (action) => {
    if (action === "next") {
      if (questionNum < survey.questions.length - 1)
        setQuestionNum((oldQIndex) => (oldQIndex += 1));
    } else if (action === "prev") {
      if (questionNum > 0) setQuestionNum((oldQIndex) => (oldQIndex -= 1));
    }
  };

  return (
    <div className="w-full text-center h-screen bg-cyan-900">
      <div className="mb-8 pt-8 text-sky-100">
        <h1 className="font-bold text-xl mb-4">{survey.surveyName}</h1>
        <p className="text-sm mb-2">Please answer the question below</p>
        <p>
          Question {questionNum + 1} of {survey.questions.length}
        </p>
      </div>

      <hr className="mb-8 w-11/12 md:w-1/2 mx-auto" />
      {/*Question card body */}
      <div className="w-11/12 md:w-1/3 rounded-xl mx-auto p-5 bg-sky-100">
        <div>
          {/*Question*/}
          <div className="mb-5">
            <h3 className="font-bold text-start">
              {`${questionNum + 1}) ${survey.questions[questionNum].question}`}
            </h3>
          </div>
          {/*Response Options*/}

          {/*For MC question */}
          {survey.questions[questionNum].questionType === "MC" && (
            <div className="ml-5">
              {survey.questions[questionNum].options.map((option, index) => {
                return (
                  <div key={index} className="flex items-center  mb-5">
                    <input
                      type="radio"
                      id={option}
                      value={option}
                      className=" w-4 h-4 mr-3"
                      name="value"
                    />
                    <label htmlFor={option}>{option}</label>
                  </div>
                );
              })}
            </div>
          )}
          {/*For Checkbox type question */}
          {survey.questions[questionNum].questionType === "Checkbox" && (
            <div className="ml-5">
              {survey.questions[questionNum].options.map((option, index) => {
                return (
                  <div key={index} className="flex items-center  mb-5">
                    <input
                      type="checkbox"
                      id={option}
                      value={option}
                      className=" w-4 h-4 mr-3"
                      name="value"
                    />
                    <label htmlFor={option}>{option}</label>
                  </div>
                );
              })}
            </div>
          )}
          {/*For CustomUserInfo type question */}
          {survey.questions[questionNum].questionType === "CustomUserInfo" && (
            <div className="ml-5 flex flex-col text-start">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="mb-5"
              />
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" id="email" />
            </div>
          )}
          {/*For Other type question */}
          {survey.questions[questionNum].questionType === "Other" && (
            <div className="ml-5">
              {survey.questions[questionNum].imgURL.map((img, index) => {
                return (
                  <div>
                    <img
                      src={survey.questions[questionNum].imgURL[index]}
                      alt={survey.questions[questionNum].imgDesc[index]}
                      className="w-20 mx-auto mb-5 rounded-xl"
                    />
                    <p>
                      <b>Description:</b>{" "}
                      {survey.questions[questionNum].imgDesc[index]}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
          {/*For Short-Answer type question */}
          {survey.questions[questionNum].questionType === "Short Answer" && (
            <div className="ml-5 ">
              <div>
                {!survey.questions[questionNum].imgURL.length && (
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your answer"
                      className="mb-5 rounded-lg h-8 text-center px-5"
                    />
                  </div>
                )}
              </div>
              {survey.questions[questionNum].imgURL.map((img, index) => {
                if (img !== undefined) {
                  return (
                    <div>
                      <img
                        src={img}
                        alt={survey.questions[questionNum].imgDesc[index]}
                        className="w-20 mx-auto mb-5 rounded-xl"
                      />
                      {survey.questions[questionNum].imgDesc[index] && (
                        <p className="mb-5">
                          <b>Description:</b>{" "}
                          {survey.questions[questionNum].imgDesc[index]}
                        </p>
                      )}
                      {!survey.questions[questionNum].imgDesc[index] && (
                        <input
                          type="text"
                          placeholder="Enter your answer"
                          className="mb-5 rounded-lg h-8 text-center px-5"
                        />
                      )}
                    </div>
                  );
                } else if (img === undefined) {
                  console.log(img);
                  return (
                    <div>
                      <input
                        type="text"
                        placeholder="Enter your answer"
                        className="mb-5 rounded-lg h-8 text-center px-5"
                      />
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>

        {/*Next/Prev buttons */}
        <div className="flex justify-around w-1/2 mx-auto">
          <button
            onClick={() => nextQuestion("prev")}
            className="bg-cyan-900 w-1/7 text-sm px-4 py-2 border rounded-3xl text-white mt-5 active:bg-cyan-900/75"
          >
            Previous
          </button>
          {questionNum < survey.questions.length - 1 ? (
            <button
              onClick={() => nextQuestion("next")}
              className="bg-cyan-900 w-24 text-sm px-4 py-2 border rounded-3xl text-white mt-5 active:bg-cyan-900/75"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              className="bg-cyan-900 w-24 text-sm px-4 py-2 border rounded-3xl text-white mt-5 active:bg-cyan-900/75"
            >
              Submit
            </button>
          )}
        </div>
        <br />
        <a href="/dashboard" className="text-cyan-900">
          {home}
        </a>
      </div>
    </div>
  );
}

export default QuestionCard;
