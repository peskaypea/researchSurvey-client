import React from "react";

const QuestionTypeSelect = ({ handleChange, questionArray }) => {
  return (
    <select
      name="questionType"
      id="questionType"
      className="text-white bg-green-600 hover:bg-[#41a28c] focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center  dark:bg-[#51D1B4] dark:hover:bg-[#41a28c]  dark:focus:ring-green-600"
      onChange={(e) => {
        handleChange(e);
      }}
      value={questionArray}
    >
      <option value="Short Answer">Short Answer</option>
      <option value="Long Feedback">Long Feedback</option>
      <option value="MC">Multiple Choice</option>
      <option value="Check Box">Check Box</option>
    </select>
  );
};

export default QuestionTypeSelect;
