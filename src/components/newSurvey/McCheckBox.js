import React, { useState } from "react";

const McCheckBox = ({ questionArray, handleChange }) => {
  const [numOptions, setNumOptions] = useState(1);
  const [options, setOptions] = useState([]);
  const questionCardDispaly = [];
  const handleAddOptions = () => {
    setNumOptions(numOptions + 1);
  };

  for (let i = 1; i <= numOptions; i++) {
    questionCardDispaly.push(
      <div className="flex">
        <input type="checkbox" name="answer1" className="mr-3" />
        <input
          type="text"
          key={i}
          id={`options${i}`}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-4"
          name={`options ${i}`}
          placeholder={`Enter Options ${i}`}
          onChange={(e) => {
            console.log(e);
            handleChange(e);
          }}
        />
      </div>
    );
  }

  return (
    <div className="py-4 h-fit  dark:bg-[#142641]">
      <label
        htmlFor="question"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Enter Question and options, check the box for correct answer
      </label>
      <input
        type="text"
        id="question"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        name="question"
        placeholder="Enter question"
        onChange={(e) => {
          handleChange(e);
        }}
        value={questionArray.question}
      />
      <br />
      {questionCardDispaly}
      <br />
      <button
        type="button"
        className="bg-blue-500 text-white px-3 py-2 rounded-lg"
        onClick={handleAddOptions}
      >
        Add Option
      </button>
    </div>
  );
};

export default McCheckBox;
