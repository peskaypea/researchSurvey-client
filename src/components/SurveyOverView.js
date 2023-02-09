import React from "react";

function SurveyOverView({ survey }) {
  return (
    <div className="w-full">
      <div className="w-2/3 grid grid-cols-2 gap-5 mx-auto mt-10">
        <div className="w-full bg-slate-300 px-5 border-t-4 border-cyan-900">
          <h3 className="font-bold mt-3">Survey</h3>
          <div className="flex gap-10 mt-3 text-sm">
            <p className="w-1/2 font-bold">Survey Name</p>
            <p className="w-1/2 ">{survey.surveyName}</p>
          </div>
          <div className="flex gap-10 mt-3 text-sm">
            <p className="w-1/2 font-bold">Organization</p>
            <p className="w-1/2">{survey.organization}</p>
          </div>
          <div className="flex  gap-10 mt-3 text-sm">
            <p className="w-1/2 font-bold">Status</p>
            <p className="w-1/2">{survey.status ? "Active" : "In-active"}</p>
          </div>
          <div className="flex  gap-10 mt-3 mb-10 text-sm">
            <p className="w-1/2 font-bold">Date Created</p>
            <p className="w-1/2">
              {survey.dateCreated && survey.dateCreated.slice(0, 10)}
            </p>
          </div>
        </div>
        <div className="w-full bg-slate-300 px-5 border-t-4 border-cyan-900">
          <h3 className="font-bold mt-3 ">Responses</h3>
          <div className="flex justify-between mt-3 font-bold text-sm">
            <h5 className="">Respondent</h5>
            <h5>Date</h5>
          </div>
          <div className="text-sm">
            <div className="flex justify-between mt-3">
              <p>User 1</p>
              <p>2023-04-07</p>
            </div>
            <div className="flex justify-between  mt-3">
              <p>User 2</p>
              <p>2023-06-10</p>
            </div>
            <div className="flex justify-between  mt-3">
              <p>User 3</p>
              <p>2023-03-05</p>
            </div>
            <div className="flex justify-center  my-3 text-xs">
              <p>Show more</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-slate-300 px-5 border-t-4 border-cyan-900">
          <h3 className="font-bold mt-3">Change History</h3>
          <div className="flex justify-center h-52 justify-center items-center">
            <p className="text-sm">No Records</p>
          </div>
        </div>
        <div className="w-full bg-slate-300 px-5 border-t-4 border-cyan-900 pb-">
          <h3 className="font-bold mt-3">Data Summary</h3>
          <div className="text-sm flex justify-between ">
            <p className="mt-4">No. Response</p>
            <p className="mt-4">120</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurveyOverView;
