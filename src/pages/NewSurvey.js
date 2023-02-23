import React, { useState } from "react";

function NewSurvey({ theme }) {
  const [questionArray, setQuestionArray] = useState([]);
  const [survey, setSurvey] = useState({
    surveyName: "",
    surveyOwner: "",
    organization: "",
    surveyType: "",
    description: "",
    activeStatus: true,
    public: true,
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

  return (
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
      />
      <label htmlFor="Public">Public</label>
      <input
        name="public"
        id="Private"
        type="radio"
        className="border border-black"
      />
      <label htmlFor="Private">Private</label>
      <br />
      <label htmlFor="">Access Code</label>
      <br />
      <input type="text" className="border border-black" name="accessCode" />
      <br />
      <button className="btn border-black">Add Question</button>
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
      <label htmlFor="endDate">No End Date</label>
      <input type="checkbox" name="noEndDate" id="noEndDate" />

      <form>
        <label htmlFor="question">Question</label>
        <br></br>
        <textarea
          className="border border-black"
          placeholder="Enter Question Here..."
        ></textarea>
        <br />
        <label htmlFor="question">Question Type</label>
        <br></br>
        <select name="questionType" id="questionType">
          <option value="MC">Multiple Choice</option>
          <option value="Short Answer">Short Answer</option>
          <option value="Check Box">Check Box</option>
          <option value="Long Feedback">Long Feedback</option>

          <option value=""></option>
        </select>
      </form>
    </div>
  );
}

export default NewSurvey;
