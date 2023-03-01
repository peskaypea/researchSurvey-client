import React, { useState } from "react";

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

  // const [surveyType, setSurveyType] = useState("Short Answer");

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
  console.log(questionArray);

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
      <div className="w-1/2 mx-auto">
        <label htmlFor="surveyName">Survey Name</label>
        <input
          type="text"
          id="surveyName"
          className="border border-black"
          name="surveyName"
          onChange={(e) => updateSurveyDetail(e)}
          value={survey.surveyName}
        />
        <br />
        <label htmlFor="Organization">Organization</label>
        <input
          type="text"
          id="Organization"
          name="organization"
          className="border border-black"
          onChange={(e) => updateSurveyDetail(e)}
          value={survey.organization}
        />
        <br />
        <label htmlFor="Survey Type">Survey Type</label>
        <input
          type="text"
          id="Survey Type"
          className="border border-black"
          name="surveyType"
          onChange={(e) => updateSurveyDetail(e)}
          value={survey.surveyType}
        />
        <br />
        <label htmlFor="Description">Description</label>
        <br></br>
        <textarea
          id="Description"
          className="border border-black"
          name="description"
          onChange={(e) => updateSurveyDetail(e)}
          value={survey.description}
        />
        <br />
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
        <label htmlFor="Public">Public</label>
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
        <label htmlFor="Private">Private</label>
        <br />
        {publicAccess === true ? (
          <>{(survey.accessCode = "")}</>
        ) : (
          <>
            <label htmlFor="">Access Code</label>
            <br />
            <input
              type="number"
              className="border border-black"
              name="accessCode"
              onChange={(e) => {
                updateSurveyDetail(e);
              }}
              value={survey.accessCode}
            />
            <br />
          </>
        )}
        <label htmlFor="endDate">End Date</label>
        <input
          type="checkbox"
          name="noEndDate"
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
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              name="dateEnd"
              id="endDate"
              className="border border-black"
              onChange={(e) => updateSurveyDetail(e)}
              value={survey.dateEnd}
            />
          </>
        )}
        <br />
        <br />
        <label htmlFor="question">Question Type</label>
        <br />
        <select
          name="questionType"
          id="questionType"
          // onChange={(e) => setSurveyType(e.target.value)}
        >
          <option value="Short Answer">Short Answer</option>
          <option value="MC">Multiple Choice</option>
          <option value="Check Box">Check Box</option>
          <option value="Long Feedback">Long Feedback</option>
        </select>
        <br />
        <button
          className="bg-sky-300 p-1  ml-3 rounded-full"
          onClick={() => handleChange(questionInput)}
        >
          Add Question
        </button>
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
        <>1. {questionArray[0]}</>
      </div>
    </>
  );
}

export default NewSurvey;
