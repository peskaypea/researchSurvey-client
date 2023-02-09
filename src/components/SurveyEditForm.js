import React, { useState } from "react";

function SurveyEditForm({ survey }) {
  const [formBody, setFormBody] = useState(survey);
  console.log(formBody);

  const updateForm = (e) => {
    if (e.target.name === "public") {
      setFormBody((oldData) => {
        return {
          ...oldData,
          [e.target.name]: Boolean(Number(e.target.value)),
        };
      });
    } else {
      setFormBody((oldData) => {
        return {
          ...oldData,
          [e.target.name]: e.target.value,
        };
      });
    }
  };

  return (
    <div className="w-1/3 mx-auto  rounded-xl mt-20 p-5 bg-cyan-800/[0.9] shadow-2xl ">
      <form className="flex flex-col gap-2 text-sm ">
        <label htmlFor="surveyName" className="font-bold text-white">
          Survey Name
        </label>
        <input
          className="h-8 rounded-lg px-3 outline-none mb-5"
          type="text"
          name="surveyName"
          id="surveyName"
          value={formBody.surveyName}
          onChange={(e) => {
            updateForm(e);
          }}
        />

        <label htmlFor="organization" className="font-bold text-white">
          Organization
        </label>
        <input
          className="h-8 rounded-lg px-3 outline-none  mb-5"
          type="text"
          value={formBody.organization}
          name="organization"
          id="organization"
          onChange={(e) => {
            updateForm(e);
          }}
        />
        <div className="w-full flex justify-between">
          <div className="flex flex-col w-1/2 pr-4 gap-2">
            <label htmlFor="surveyType" className="font-bold text-white">
              Type
            </label>
            <input
              className="h-8 rounded-lg px-3 outline-none  mb-5"
              type="text"
              name="surveyType"
              value={formBody.surveyType}
              id="surveyType"
              onChange={(e) => {
                updateForm(e);
              }}
            />
          </div>
          <div className="flex flex-col w-1/2 pl-4 gap-2">
            <label htmlFor="dateEnd" className="font-bold text-white">
              End Date
            </label>
            <input
              className="h-8 rounded-lg px-3 outline-none"
              type="date"
              value={formBody.dateEnd.toString().slice(0, 10)}
              name="dateEnd"
              id="dateEnd"
              onChange={(e) => {
                updateForm(e);
              }}
            />
          </div>
        </div>

        <div className="w-full flex justify-between">
          <div className="flex flex-col w-1/2 pr-4 gap-2">
            <label className="text-sm font-bold text-white" htmlFor="public">
              Access
            </label>
            <select
              name="public"
              id="public"
              className="h-8 rounded-lg px-3 outline-none  mb-5"
              onChange={(e) => {
                updateForm(e);
              }}
            >
              <option value={Number(formBody.public)}>
                {formBody.public ? "Public" : "Private"}
              </option>
              <option value={1}>Public</option>
              <option value={0}>Private</option>
            </select>
          </div>
          {!formBody.public && (
            <div className="flex flex-col w-1/2 pl-4 gap-2">
              <label htmlFor="surveyType " className="font-bold text-white">
                Access Code
              </label>
              <input
                className="h-8 rounded-lg px-3 outline-none  mb-5"
                type="text"
                name="surveyType"
                placeholder=""
                id="surveyType"
                onChange={(e) => {
                  updateForm(e);
                }}
              />
            </div>
          )}
        </div>
        <label htmlFor="description" className="font-bold text-white">
          Description
        </label>
        <textarea
          className="rounded-lg px-3 resize-none outline-none mb-5 h-32"
          name="description"
          id="description"
          value={formBody.description}
          onChange={(e) => {
            updateForm(e);
          }}
        ></textarea>

        <button type="button">Save</button>
      </form>
    </div>
  );
}

export default SurveyEditForm;
