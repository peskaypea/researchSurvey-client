import React from "react";

const ShortLongAnswer = () => {
  return (
    <div className="py-4">
      <label
        htmlFor="question"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Enter Question
      </label>
      <input
        type="text"
        id="question"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        name="question"
      />
    </div>
  );
};

export default ShortLongAnswer;
