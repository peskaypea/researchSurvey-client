import React from "react";

const DisplayQuestions = ({ survey }) => {
  return (
    <div>
      {survey.questions.map((data) => {
        return (
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-5"
          >
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {data.question}
            </h5>
            <li className="list-none">
              {data.options.map((options) => {
                return (
                  <ul className="font-normal text-gray-700 dark:text-gray-400">
                    {options}
                  </ul>
                );
              })}
            </li>
          </a>
        );
      })}
    </div>
  );
};

export default DisplayQuestions;
