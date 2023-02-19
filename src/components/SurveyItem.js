import React from "react";
import SurveySettings from "./SurveySettings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faEdit,
  faEye,
  faEllipsisV,
  faLock,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
function SurveyItem({ survey, deleteSurvey, subMenu, setSubMenu }) {
  const del = <FontAwesomeIcon icon={faX} />;
  const edit = <FontAwesomeIcon icon={faEdit} />;
  const view = <FontAwesomeIcon icon={faEye} />;
  const ellipsis = <FontAwesomeIcon icon={faEllipsisV} size={"lg"} />;
  const lock = <FontAwesomeIcon icon={faLock} size={"sm"} />;
  const dots = <FontAwesomeIcon icon={faEllipsisH} size={"lg"} />;

  return (
    <div className="mb-2 ">
      <div className="flex justify-around  bg-white w-11/12 xl:w-8/12 mx-auto h-24 rounded-lg shadow-md hover:shadow-lg dark:bg-slate-700">
        <div className="flex w-1/12 h-full pl-5 items-center ">
          <div className="flex w-4/6 h-3/6 bg-none md:bg-gradient-to-r from-green-400 to-sky-400 rounded-md justify-center items-center">
            {!survey.public && (
              <div className="flex justify-center text-lg opacity-70">
                {lock}
              </div>
            )}
          </div>
        </div>
        <div className="flex w-11/12 h-full flex-col ">
          <div className="flex items-end justify-start">
            <div className="hidden md:flex md:pl-4 md:w-2/4 md:h-3/6 ">
              <div className="flex items-end ">
                <h2 className="invisible  md:visible text-sm font-light underline ">
                  created by {survey.organization}
                </h2>
              </div>
            </div>
            <div className="flex  w-2/2 h-3/6 ">
              <div className="flex items-end text-center  ">
                <h2 className=" font-bold ">{survey.surveyName}</h2>
              </div>
            </div>
          </div>
          <div className=" w-full h-5/6 mt-2 flex">
            <div className="flex  justify-around items-center w-2/6 h-full ">
              <div>
                <h6 className="invisible  md:visible text-xs sm:text-sm md:font-semibold">
                  Start Date
                </h6>
                <p className="invisible  md:visible text-xs">
                  {survey.dateCreated.slice(0, 10)}
                </p>
              </div>
              <div>
                <h6 className="invisible  md:visible text-xs sm:text-sm font-semibold">
                  End Date
                </h6>
                <p className="invisible  md:visible text-xs">
                  {survey.dateEnd.slice(0, 10)}
                </p>
              </div>
            </div>
            <div className="flex justify-center w-full h-full  items-center">
              <a href={`/survey/${survey._id}`}>
                <button
                  type="button"
                  className="text-black  bg-gradient-to-r from-green-400 to-sky-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-7 mb-2 flex "
                >
                  Take Survey
                </button>
              </a>
            </div>

            <div className="relative flex justify-center items-start w-1/12 h-full pt-5 hover:text-green-500  dark:hover:text-sky-500  ">
              <SurveySettings
                survey={survey}
                deleteSurvey={deleteSurvey}
                subMenu={subMenu}
                setSubMenu={setSubMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurveyItem;
