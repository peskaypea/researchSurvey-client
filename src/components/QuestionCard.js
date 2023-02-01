import React, { useState } from "react";

function QuestionCard(props) {
  const [questionNum, setQuestionNum] = useState(0);
  const nextQuestion = () => {
    if (questionNum < props.survey.questions.length - 1)
      setQuestionNum((oldQIndex) => (oldQIndex += 1));
  };
  return (
    <div>
      {props.survey.questions.length > 0 && (
        <h1>{props.survey.questions[questionNum].question} </h1>
      )}
      <button onClick={nextQuestion}>Next</button>
      <br></br>
      <a href="/dashboard">Back</a>
    </div>
  );
}

export default QuestionCard;
