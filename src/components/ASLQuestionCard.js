import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const home = <FontAwesomeIcon icon={faHome} />;

function QuestionCard({ survey }) {
  const [questionNum, setQuestionNum] = useState(0);
  const questions = survey.questions.map((q) => {
    return q.question;
  });
  const initialResponse = {};
  for (const question of questions) {
    initialResponse[question] = "";
  }

  //Survey response
  const [response, setResponse] = useState(initialResponse);
  const start = Date.now();
  const currentQuestion = survey.questions[questionNum].question;

  console.log(response);

  const navigate = useNavigate();
  const nextQuestion = (action) => {
    const time = (Date.now() - start) / 1000;
    const obj = {
      ...response,
      [currentQuestion]: {
        ...response[currentQuestion],

        [`Question ${questionNum + 1}`]: {
          ...response[currentQuestion][`Question ${questionNum + 1}`],
          time: Math.round(time),
        },
      },
    };

    if (action === "next") {
      if (questionNum < survey.questions.length - 1) setResponse(obj);
      setQuestionNum((oldQIndex) => (oldQIndex += 1));
    } else if (action === "prev") {
      if (questionNum > 0) setQuestionNum((oldQIndex) => (oldQIndex -= 1));
    }
  };

  const saveResponse = (e) => {
    console.log(currentQuestion);
    console.log({ [e.target.name]: e.target.value });

    const obj = {
      ...response,
      [currentQuestion]: {
        ...response[currentQuestion],

        [`Question ${questionNum + 1}`]: {
          ...response[currentQuestion][`Question ${questionNum + 1}`],
          [e.target.name]: e.target.value,
        },
      },
    };

    setResponse(obj);
  };

  const navigateHome = () => {
    const res = window.confirm(
      "Are you sure you want to return? All your progress will be lost."
    );
    if (res) {
      navigate("/dashboard");
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

      <hr className="mb-8 w-11/12 lg:w-1/2 mx-auto" />
      {/*Question card body */}
      <div className="w-11/12 lg:w-1/2 rounded-xl mx-auto p-5 bg-sky-100">
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
                let id = Math.random();

                return (
                  <div key={index} className="flex items-center  mb-5">
                    <input
                      type="radio"
                      id={option}
                      value={option}
                      className=" w-4 h-4 mr-3"
                      name={"type"}
                      onChange={(e) => saveResponse(e)}
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
                className="mb-5 rounded-lg h-8 px-3 outline-0"
                onChange={(e) => saveResponse(e)}
              />
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                className="mb-5 rounded-lg h-8 px-3 outline-0"
                onChange={(e) => saveResponse(e)}
              />
            </div>
          )}
          {/*For Other type question */}
          {survey.questions[questionNum].questionType === "Other" && (
            <div className="ml-5">
              {survey.questions[questionNum].imgURL.map((img, index) => {
                return (
                  <div key={img}>
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
              {survey.questions[questionNum].imgURL.map((img, index) => {
                return (
                  <div key={img}>
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
                        name={img}
                        placeholder="Enter your answer"
                        className="mb-5 rounded-lg h-8 text-center px-5"
                        value={
                          response[
                            survey.questions[questionNum].question[index]
                          ]
                        }
                        onChange={(e) => saveResponse(e)}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/*Next/Prev buttons */}
        <div className="flex justify-around w-1/2 mx-auto">
          {/* <button
            onClick={() => nextQuestion("prev")}
            className="bg-slate-900/50 w-1/7 text-sm px-4 py-2 border rounded-3xl text-white mt-5 "
            disabled
          >
            Previous
          </button> */}
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
        <button
          type="button"
          className="text-cyan-900"
          onClick={() => navigateHome()}
        >
          {home}
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;
