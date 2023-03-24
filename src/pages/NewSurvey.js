import React, { useState } from "react";
import DashNav from "components/DashNav";
import McCheckBox from "components/newSurvey/McCheckBox";
import DisplayQuestions from "../components/DisplayQuestions";
import ShortLongAnswer from "components/newSurvey/ShortLongAnswer";
import SurveryInfoInput from "components/newSurvey/SurveryInfoInput";
import QuestionTypeSelect from "components/newSurvey/QuestionTypeSelect";

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

  const addNewQuestion = () => {
    if (
      questionArray.questionType === "MC" ||
      questionArray.questionType === "Check Box"
    ) {
      for (const key in questionArray) {
        if (key.startsWith("options ")) {
          const optionNumber = parseInt(key.split(" ")[1]);
          questionArray.options[optionNumber - 1] = questionArray[key];
          delete questionArray[key];
        }
        if (key.startsWith("correctOption ")) {
          const correctOptionNumber = parseInt(key.split(" ")[1]);
          questionArray.correctOption = questionArray.options.slice(
            correctOptionNumber - 1,
            correctOptionNumber
          );
          delete questionArray[key];
        }
      }
    }
    survey.questions.push(questionArray);
    setQuestionArray({
      questionType: "Short Answer",
      question: "",
      options: [],
      correctOption: null,
      imgURL: [],
      imgDesc: [],
      _id: "",
    });
  };

  return (
    <>
      <DashNav theme={theme} />
      {console.log(questionArray)}
      <div className="h-100vh flex dark:bg-[#142641] ">
        <div className=" w-full flex justify-around  pt-10">
          {/* Survey information component created */}
          <div className="flex-col pl-10 pt-10 pb-5">
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
          </div>

          <form className="w-2/6">
            <label
              htmlFor="question"
              className="block mt-10 mb-5 text-m font-medium text-gray-900 dark:text-white "
            >
              Question Type
            </label>

            <QuestionTypeSelect
              handleChange={handleChange}
              questionArray={questionArray.questionType}
            />
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
              type="button"
              className="bg-green-500 text-white px-3 py-2 rounded-lg"
              onClick={addNewQuestion}
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
