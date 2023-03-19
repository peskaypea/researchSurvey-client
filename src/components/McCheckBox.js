import React, { useState } from "react";

const McCheckBox = ({ questionArray, handleChange }) => {
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

      <div className="flex">
        <input type="checkbox" name="answer1" className="mr-3" />
        <input
          type="text"
          id="options"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          name="options"
          placeholder="Enter options"
          onChange={(e) => {
            console.log(e);
            handleChange(e);
          }}
          // value={questionArray.options}
        />
      </div>
      <br />
      <div className="flex">
        <input type="checkbox" name="answer2" className="mr-3" />
        <input
          type="text"
          id="answer2"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          name="answer2"
          placeholder="Enter options"
        />
      </div>
      <br />
      <div className="flex">
        <input type="checkbox" name="answer3" className="mr-3" />
        <input
          type="text"
          id="answer3"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          name="answer3"
          placeholder="Enter options"
        />
      </div>
      <br />
      <div className="flex">
        <input type="checkbox" name="answer4" className="mr-3" />
        <input
          type="text"
          id="answer4"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          name="answer4"
          placeholder="Enter options"
        />
      </div>
      <br />
      <div className="flex">
        <input type="checkbox" name="answer4" className="mr-3" />
        <input
          type="text"
          id="answer4"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          name="answer4"
          placeholder="Enter options"
        />
      </div>
    </div>
  );
};

export default McCheckBox;
