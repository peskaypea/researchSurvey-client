import McCheckBox from "components/newSurvey/McCheckBox";
import ShortLongAnswer from "components/newSurvey/ShortLongAnswer";
import React, { useState } from "react";
import DashNav from "components/DashNav";
import DisplayQuestions from "../components/DisplayQuestions";
import SurveryInfoInput from "components/newSurvey/SurveryInfoInput";

function NewSurvey({ theme }) {
  const [questionArray, setQuestionArray] = useState({
    questionType: "Short Answer",
    question: "",
    options: [],
    correctOption: null,
    imgURL: [],
    imgDesc: [],
    _id: "",
  });

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
    questions: [
      {
        questionType: "Long Feedback",
        question: "What is your first reaction to the product",
        options: [
          "Very positive",
          "Somewhat positive",
          "Neutral",
          "Somewhat negative",
          "Very negative",
        ],
        correctOption: null,
        imgURL: [],
        imgDesc: [],
        _id: "63f793344766c42fd9416a3a",
      },
      {
        questionType: "MC",
        question: "How would you rate the quality of the product",
        options: [
          "Very high quality",
          "High quality",
          "Neither high nor low quality",
          "Low quality",
          "Very low quality",
        ],
        correctOption: null,
        imgURL: [],
        imgDesc: [],
        _id: { $oid: "63f793344766c42fd9416a3b" },
      },
      {
        questionType: "MC",
        question: "How innovative is the product?",
        options: [
          "Extremely innovative",
          "Very innovative",
          "Somewhat innovative",
          "Not so innovative",
          "Not at all innovative",
        ],
        correctOption: null,
        imgURL: [],
        imgDesc: [],
        _id: { $oid: "63f793344766c42fd9416a3c" },
      },
      {
        questionType: "MC",
        question:
          "When you think about the product, do you think of it as something you need or don't need?",
        options: [
          "Definitely need",
          "Probably need",
          "Neutral",
          "Probably don't need",
          "Definitely don't need",
        ],
        correctOption: null,
        imgURL: [],
        imgDesc: [],
        _id: "63f793344766c42fd9416a3d",
      },
      {
        questionType: "MC",
        question: "How would you rate the value for money of the product?",
        options: [
          "Excellent",
          "Above average",
          "Average",
          "Below average",
          "Poor",
        ],
        correctOption: null,
        imgURL: [],
        imgDesc: [],
        _id: "63f793344766c42fd9416a3e",
      },
      {
        questionType: "MC",
        question:
          "If the product were available today, how likely would you be buying the product?",
        options: [
          "Extremely likely",
          "Very likely",
          "Somewhat likely",
          "Not so likely",
          "Not at all likely",
        ],
        correctOption: null,
        imgURL: [],
        imgDesc: [],
        _id: "63f793344766c42fd9416a3f",
      },
    ],
  });

  const updateSurveyDetail = (e) => {
    setSurvey((oldData) => {
      return {
        ...oldData,
        [e.target.name]: e.target.value.trim(),
      };
    });
  };

  const handleChange = (e) => {
    setQuestionArray((oldData) => {
      return {
        ...oldData,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      <DashNav theme={theme} />

      <div className="h-100vh flex dark:bg-[#142641] ">
        <div className=" w-full flex justify-around  pt-10">
          <SurveryInfoInput
            updateSurveyDetail={updateSurveyDetail}
            survey={survey}
            endDate={endDate}
            setEndDate={setEndDate}
            checked={checked}
            setChecked={setChecked}
            publicAccess={publicAccess}
            setPublicAccess={setPublicAccess}
          />
          <DisplayQuestions survey={survey} />

          <form className="w-2/6">
            <label
              htmlFor="question"
              className="block mt-10 mb-5 text-m font-medium text-gray-900 dark:text-white "
            >
              Question Type
            </label>

            <select
              name="questionType"
              id="questionType"
              className="text-white bg-green-600 hover:bg-[#41a28c] focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center  dark:bg-[#51D1B4] dark:hover:bg-[#41a28c]  dark:focus:ring-green-600"
              onChange={(e) => {
                handleChange(e);
              }}
              value={questionArray.questionType}
            >
              <option id="Short Answer" value="Short Answer">
                Short Answer
              </option>
              <option value="Long Feedback">Long Feedback</option>
              <option value="MC">Multiple Choice</option>
              <option value="Check Box">Check Box</option>
            </select>
            <br />

            {questionArray.questionType === "Short Answer" ||
            questionArray.questionType === "Long Feedback" ? (
              <ShortLongAnswer
                questionArray={questionArray}
                handleChange={handleChange}
              />
            ) : (
              <McCheckBox
                questionArray={questionArray}
                handleChange={handleChange}
              />
            )}

            <br />
            <button
              className="bg-sky-300 p-1  ml-3 rounded-full h-10 "
              onClick={() => handleChange()}
            >
              Add Question
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewSurvey;
