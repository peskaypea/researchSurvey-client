import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faEdit,
  faEye,
  faEllipsisV,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
function SurveyItem({ survey, deleteSurvey, id }) {
  const del = <FontAwesomeIcon icon={faX} />;
  const edit = <FontAwesomeIcon icon={faEdit} />;
  const view = <FontAwesomeIcon icon={faEye} />;
  const ellipsis = <FontAwesomeIcon icon={faEllipsisV} size={"lg"} />;
  const lock = <FontAwesomeIcon icon={faLock} size={"sm"} />;
  return (
    <div className="mb-2 " key={id}>
      <div className="flex justify-around pt-5 bg-white w-11/12 xl:w-8/12 mx-auto h-24 text-sm  text-gray-500 rounded-lg shadow-2xl">
        <div className="md:flex md:justify-around  w-20 md:w-72">
          <h6 className="text-center text-xs sm:text-sm font-semibold truncate md:hidden w-24 ">
            <div> {survey.surveyName}</div>
            {!survey.public && (
              <div className=" w-full block md:hidden  mx-auto text-center align-top ">
                {lock}
              </div>
            )}
          </h6>
          <h6 className="text-center text-xs sm:text-sm font-semibold  hidden md:block w-28 ">
            <div> {survey.surveyName}</div>
            {!survey.public && (
              <div className=" w-full hidden sm:block  mx-auto text-center align-top ">
                {lock}
              </div>
            )}
          </h6>
          <h6 className="text-center text-xs  sm:text-sm truncate md:hidden w-24 ">
            {survey.organization}
          </h6>
          <h6 className="text-center text-xs  sm:text-sm  hidden md:block w-28 ">
            {survey.organization}
          </h6>
        </div>

        <div className="w-16 ">
          <h6 className="text-xs sm:text-sm font-semibold">Start Date</h6>
          <p className="text-xs">{survey.dateCreated.slice(0, 10)}</p>
        </div>
        <div className="w-16">
          <h6 className="text-xs sm:text-sm font-semibold">End Date</h6>
          <p className="text-xs">{survey.dateEnd.slice(0, 10)}</p>
        </div>

        <div className="flex ">
          <a
            className="border h-10 py-1 sm:py-2 px-5 rounded-3xl text-white bg-cyan-800 hover:opacity-90 hover:cursor-pointer w-20  sm:w-36 "
            href={`/survey/${survey._id}`}
          >
            <p className="w-full text-xs text-center">Take Survey</p>
          </a>
          <a
            href="/surveyedit"
            className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer hidden sm:block"
          >
            {edit}
          </a>
          <div
            className="border h-10 p-3 rounded-2xl hover:bg-slate-200 hover:cursor-pointer hidden sm:block"
            id={survey._id}
            onClick={(e) => {
              deleteSurvey(e);
            }}
          >
            {del}
          </div>
          <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer hidden sm:block">
            {view}
          </div>
        </div>
        <div className="flex lg:hidden h-full align-top hover:cursor-pointer sm:hidden">
          {ellipsis}
        </div>
      </div>
    </div>
  );
}

export default SurveyItem;
