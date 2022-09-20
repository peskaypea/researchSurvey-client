import React, { useState, useEffect } from "react";
import "./QuestionCard.css";
function QuestionCard(props) {
  const [questions, setQuestions] = useState(props.survey.questions);
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(Date.now());
  const [res, setRes] = useState({});
  const getShortAnswerRes = props.getShortAnswerResponse;
  const submitAnswers = props.submit;
  const nextQuestion = (e) => {
    e.preventDefault();

    setIndex((index) => {
      index += 1;
      console.log(index);
      return index;
    });
  };
  const getTime = () => {
    let duration = Date.now() - time;
    props.getReponseTime(duration);
    setTime(Date.now());
  };

  useEffect(() => {
    setQuestions(() => {
      return props.survey.questions;
    });
  }, [index]);

  const getValue = (e) => {
    const obj = {
      ...res,
      [e.target.name]: e.target.value,
    };
    console.log(obj);
    setRes((response) => {
      return obj;
    });
  };

  return (
    <div className="questionCard">
      {index < 26 && (
        <div>
          <h3>
            Question {index + 1} of {questions.length}
          </h3>
          <hr />
          {questions[index].questionType === "MC" && (
            <form className="form-check">
              <label className="form-check-label">
                {questions[index].question}
              </label>
              <br />
              {questions[index].options.map((option) => {
                return (
                  <div>
                    <input
                      className="form-check-input"
                      name="form-check-input"
                      id={"radio-btn-" + index}
                      type="radio"
                      value={option}
                      onClick={props.getMCResponse}
                    />
                    <label className="form-check-label" htmlFor={option}>
                      &nbsp; {option}
                    </label>
                    <br />
                  </div>
                );
              })}
              <br />
              <button
                onClick={(e) => {
                  getTime();
                  nextQuestion(e);
                }}
                className="btn btn-primary"
              >
                Next
              </button>
            </form>
          )}
          {/* ----------------------------------------------------------------- */}
          {questions[index].questionType === "Other" && (
            <form className="form-check">
              <label className="form-check-label">
                {questions[index].question}
              </label>
              <br />
              <div>
                <label>
                  <b>Definition: </b>
                  {questions[index].imgDesc}
                </label>
                <br />
                <img src={questions[index].imgURL} alt="" />
              </div>
              <button
                onClick={(e) => {
                  getTime();
                  nextQuestion(e);
                }}
                className="btn btn-primary"
              >
                Next
              </button>
            </form>
          )}
          {/* -----------------------------------------------------------------------*/}
          {questions[index].questionType === "Short Answer" && (
            <form action="">
              <label>{questions[index].question}</label>
              <br />
              {questions[index].imgURL.map((img, i) => {
                return (
                  <div>
                    {questions[index].imgDesc[i] && (
                      <div>
                        <label>
                          <b>Definition:</b>
                          {questions[index].imgDesc[i]}
                        </label>
                        <br />
                        <img src={img} alt="chinese character" />
                      </div>
                    )}
                    {!questions[index].imgDesc[i] && (
                      <div>
                        <hr />

                        <p>
                          What does the following character mean? (please give
                          your best guess based on the above character given)
                        </p>
                        <img src={img} alt="" />
                        <br />
                        <textarea
                          name={img}
                          cols={55}
                          rows={3}
                          onChange={getValue}
                          value={res[img] || ""}
                        ></textarea>
                      </div>
                    )}
                  </div>
                );
              })}
              {index < 25 ? (
                <button
                  onClick={(e) => {
                    getTime();
                    getShortAnswerRes(res);
                    setRes({});
                    nextQuestion(e);
                  }}
                  className="btn btn-primary"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    getTime();
                    getShortAnswerRes(res);
                    setRes({});
                    submitAnswers();
                    nextQuestion(e);
                  }}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              )}
            </form>
          )}
        </div>
      )}

      {index >= 26 && (
        <div className="thank-you">
          <h1>Thank you for your participation.</h1>
          <img src="mochi-cat.gif" alt="" />
          <p>
            Thank you for taking part in this research. Your response will be
            used for this study only. We'll contact you shortly.
          </p>
        </div>
      )}
    </div>
  );
}

export default QuestionCard;
