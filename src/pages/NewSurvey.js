import McCheckBox from "components/McCheckBox";
import React, { useState } from "react";
import DashNav from "components/DashNav";

//SurveyData storage
// {
//   questionType: "",
//   question: "",
//   options: [],
//   correctOption: null,
//   imgURL: [],
//   imgDesc: [],
//   _id: "",
// },

function NewSurvey({ theme }) {
  const [questionArray, setQuestionArray] = useState([]);
  const [questionInput, setQuestionInput] = useState("");

  const [surveyType, setSurveyType] = useState("Short Answer");

  const [checked, setChecked] = useState(true);
  const [publicAccess, setPublicAccess] = useState(true);
  const [endDate, setEndDate] = useState(false);
  const [survey, setSurvey] = useState({
    surveyName: "",
    surveyOwner: "",
    organization: "",
    surveyType: "",
    description: "",
    activeStatus: true,
    public: publicAccess,
    accessCode: "",
    dateCreated: "",
    dateEnd: "",
    instructionMessage: "",
    numResponse: 0,
  });
  console.log(survey);

  const updateSurveyDetail = (e) => {
    setSurvey((oldData) => {
      return {
        ...oldData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleChange = (input) => {
    setQuestionArray([...questionArray, input]);
  };

  return (
    <>
      <DashNav theme={theme} />

      <div className="bg-[#142641] h-screen-vh flex ">
        <div className="w-full flex justify-center pt-10">
          <form className="w-2/6">
            <div className="mb-6">
              <label
                htmlFor="surveyName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Survey Name
              </label>
              <input
                type="text"
                id="surveyName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                name="surveyName"
                onChange={(e) => updateSurveyDetail(e)}
                value={survey.surveyName}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="Organization"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Organization
              </label>
              <input
                type="text"
                id="Organization"
                name="organization"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                onChange={(e) => updateSurveyDetail(e)}
                value={survey.organization}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="Survey Type"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Survey Type
              </label>
              <input
                type="text"
                id="Survey Type"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                name="surveyType"
                onChange={(e) => updateSurveyDetail(e)}
                value={survey.surveyType}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="Description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <input
                type="text"
                id="Description"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                name="description"
                onChange={(e) => updateSurveyDetail(e)}
                value={survey.description}
              />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name="noEndDate"
                  className="w-4 h-4  border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  id="noEndDate"
                  onClick={() => {
                    setEndDate(!endDate);
                  }}
                />
                {endDate === false ? (
                  <>{(survey.dateEnd = "")}</>
                ) : (
                  <>
                    <br />

                    <input
                      type="date"
                      name="dateEnd"
                      id="endDate"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => updateSurveyDetail(e)}
                      value={survey.dateEnd}
                    />
                  </>
                )}
              </div>
              <label
                htmlFor="endDate"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                End Date
              </label>
            </div>
            <input
              name="public"
              id="Public"
              type="radio"
              className="border border-black"
              onClick={() => {
                setPublicAccess(true);
                setChecked(!checked);
              }}
              checked={checked}
            />
            <label
              htmlFor="Public"
              className=" mb-2 text-sm font-medium text-gray-900 dark:text-white mr-5"
            >
              Public
            </label>
            <input
              name="public"
              id="Private"
              type="radio"
              className="border border-black"
              onClick={() => {
                setPublicAccess(false);
                setChecked(!checked);
              }}
              checked={!checked}
            />
            <label
              htmlFor="Private"
              className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Private
            </label>
            <br />
            {publicAccess === true ? (
              <>{(survey.accessCode = "")}</>
            ) : (
              <>
                <label
                  htmlFor=""
                  className=" text-sm font-medium text-gray-900 dark:text-white flex justify-center mb-3"
                >
                  Access Code
                </label>

                <input
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="accessCode"
                  onChange={(e) => {
                    updateSurveyDetail(e);
                  }}
                  value={survey.accessCode}
                />
                <br />
              </>
            )}
            <label htmlFor="question">Question Type</label>
            <br />
            <select
              name="questionType"
              id="questionType"
              onChange={(e) => setSurveyType(e.target.value)}
            >
              <option value="Short Answer">Short Answer</option>
              <option value="MC">Multiple Choice</option>
              <option value="Check Box">Check Box</option>
              <option value="Long Feedback">Long Feedback</option>
            </select>
            <br />
            {/* <button
              className="bg-sky-300 p-1  ml-3 rounded-full"
              onClick={() => handleChange(questionInput)}
            >
              Add Question
            </button>
            <br />

            <form>
              <br />
              <label htmlFor="question">Question</label>
              <br></br>
              <textarea
                className="border border-black"
                placeholder="Enter Question Here..."
                onChange={(e) => setQuestionInput(e.target.value)}
              ></textarea>
              <br />

              <br></br>
            </form>
            <McCheckBox /> */}
          </form>
        </div>

        <br />
      </div>
    </>
  );
}

export default NewSurvey;
