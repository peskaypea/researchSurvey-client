import React from "react";

const PricingCard = () => {
  let PricingPlan = {
    Basic: {
      Name: "Basic",
      Price: "$10/month",
      Features: [
        "Unlimited survey creation",
        "Custom survey branding",
        "100 responses/month",
      ],
    },
    Professional: {
      Name: "Professional",
      Price: "$50/month",
      Features: [
        "Unlimited survey creation",
        "Custom survey branding",
        "Unlimited responses",
      ],
    },
    Enterprise: {
      Name: "Enterprise",
      Price: "$200/month",
      Features: [
        "Unlimited survey creation",
        "Custom survey branding",
        "Unlimited responses",
        "Dedicated Account Manager",
      ],
    },
  };

  return (
    <div className="flex md:flex-row flex-col justify-center">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  m-4 justify-center">
        <h5 className="mb-4 text-xl font-medium ">Basic</h5>
        <div className="flex items-baseline">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">10</span>
          <span className="ml-1 text-xl font-normal text-gray-500 ">
            /month
          </span>
        </div>

        <ul role="list" className="space-y-5 my-7">
          <li className="flex space-x-3">
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-5 h-5 text-green-600 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              Unlimited survey creation
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-5 h-5 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ">
              Custom survey branding
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-5 h-5 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ">
              100 responses/month
            </span>
          </li>
          <li className="flex space-x-3 line-through decoration-gray-500">
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-5 h-5 text-gray-400 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              Dedicated Account Manager
            </span>
          </li>

          <li className="flex space-x-3 line-through decoration-gray-500"></li>
        </ul>
        <button
          type="button"
          className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Sign Up
        </button>
      </div>

      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8   m-4">
        <h5 className="mb-4 text-xl font-medium ">Standard</h5>
        <div className="flex items-baseline">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">50</span>
          <span className="ml-1 text-xl font-normal text-gray-500 ">
            /month
          </span>
        </div>

        <ul role="list" className="space-y-5 my-7">
          <li className="flex space-x-3">
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-5 h-5 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ">
              Unlimited survey creation
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-5 h-5 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ">
              Custom survey branding
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-5 h-5 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ">
              Unlimited responses/month
            </span>
          </li>
          <li className="flex space-x-3 line-through decoration-gray-500">
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-5 h-5 text-gray-400 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              Dedicated Account Manager
            </span>
          </li>

          <li className="flex space-x-3 line-through decoration-gray-500"></li>
        </ul>
        <button
          type="button"
          className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Sign Up
        </button>
      </div>
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8   m-4">
        <h5 className="mb-4 text-xl font-medium ">Enterprise</h5>
        <div className="flex items-baseline">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">200</span>
          <span className="ml-1 text-xl font-normal text-gray-500 ">
            /month
          </span>
        </div>

        <ul role="list" className="space-y-5 my-7">
          <li className="flex space-x-3">
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-5 h-5 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ">
              Unlimited survey creation
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-5 h-5 text-green-600 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ">
              Custom survey branding
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-5 h-5 text-green-600 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ">
              Unlimited responses/month
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-5 h-5 text-green-600 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ">
              Dedicated Account Manager
            </span>
          </li>

          <li className="flex space-x-3 line-through decoration-gray-500"></li>
        </ul>
        <button
          type="button"
          className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default PricingCard;