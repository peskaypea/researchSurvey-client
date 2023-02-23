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

  return (
    <div className="w-1/2 mx-auto">
      <label htmlFor="surveyName">Survey Name</label>
      <input
        type="text"
        id="surveyName"
        className="border border-black"
        name="surveyName"
      />
      <br />
      <label htmlFor="Organization">Organization</label>
      <input
        type="text"
        id="Organization"
        name="organization"
        className="border border-black"
      />
      <br />
      <label htmlFor="Survey Type">Survey Type</label>

      <input
        type="text"
        id="Survey Type"
        className="border border-black"
        name="surveyType"
      />
      <br />
      <label htmlFor="Description">Description</label>
      <br></br>
      <textarea
        id="Description"
        className="border border-black"
        name="description"
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
