import React, { useState } from "react";

function SurveyEditForm({ survey }) {
  const [formBody, setFormBody] = useState(survey);
  console.log(formBody);

  const updateForm = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setFormBody((oldData) => {
      return {
        ...oldData,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="surveyName">Survey Name</label>
        <input
          type="text"
          name="surveyName"
          id="surveyName"
          placeholder={survey.surveyName}
          onChange={(e) => {
            updateForm(e);
          }}
        />
        <br />
        <label htmlFor="organization">Organization</label>
        <input
          type="text"
          placeholder={survey.organization}
          name="organization"
          id="organization"
          onChange={(e) => {
            updateForm(e);
          }}
        />
        <br />
        <label htmlFor="surveyType">Type</label>
        <input
          type="text"
          name="surveyType"
          placeholder={survey.surveyType}
          id="surveyType"
          onChange={(e) => {
            updateForm(e);
          }}
        />
        <br />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          cols={30}
          rows={5}
          id="description"
          value={survey.description}
          onChange={(e) => {
            updateForm(e);
          }}
        ></textarea>
        <br />
        <label htmlFor="public">Access</label>
        <input
          type="text"
          name="public"
          placeholder={survey.public ? "Public" : "Private"}
          id="public"
          onChange={(e) => {
            updateForm(e);
          }}
        />
        <br />
        <label htmlFor="dateEnd">End Date</label>
        <input
          type="date"
          value={survey.dateEnd.toString().slice(0, 10)}
          name="dateEnd"
          id="dateEnd"
          onChange={(e) => {
            updateForm(e);
          }}
        />
        <br />
        <button type="button">Save</button>
      </form>
    </div>
  );
}

export default SurveyEditForm;
