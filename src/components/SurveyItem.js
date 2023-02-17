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
          <div className="flex w-4/6 h-3/6 bg-gradient-to-r from-green-400 to-sky-400 rounded-md justify-center items-center">
            {!survey.public && (
              <div className="flex justify-center text-lg opacity-70">
                {lock}
              </div>
            )}
          </div>
        </div>
        <div className="flex w-11/12 h-full flex-col ">
          <div className="flex items-end">
            <div className="flex pl-4 w-2/4 h-3/6 ">
              <div className="flex items-end ">
                <h2 className="hidden md:visable text-sm font-light underline ">
                  created by {survey.organization}
                </h2>
              </div>
            </div>
            <div className="flex  w-2/2 h-3/6 justify-center ">
              <div className="flex items-end ">
                <h2 className="font-bold ">{survey.surveyName}</h2>
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

    // <div className="mb-2 ">
    //   <div className="flex justify-around pt-5 bg-white w-11/12 xl:w-8/12 mx-auto h-24 text-sm  text-gray-500 rounded-lg shadow-2xl dark:bg-slate-500 dark:text-slate-100">
    //     <div className="md:flex md:justify-around  w-20 md:w-72">
    //       <h6 className="text-center text-xs sm:text-sm font-semibold truncate md:hidden w-24 ">
    //         <div> {survey.surveyName}</div>
    //         {!survey.public && (
    //           <div className=" w-full block md:hidden  mx-auto text-center align-top ">
    //             {lock}
    //           </div>
    //         )}
    //       </h6>
    //       <h6 className="text-center text-xs sm:text-sm font-semibold  hidden md:block w-28 ">
    //         <div> {survey.surveyName}</div>
    //         {!survey.public && (
    //           <div className=" w-full hidden sm:block  mx-auto text-center align-top ">
    //             {lock}
    //           </div>
    //         )}
    //       </h6>
    //       <h6 className="text-center text-xs  sm:text-sm truncate md:hidden w-24 ">
    //         {survey.organization}
    //       </h6>
    //       <h6 className="text-center text-xs  sm:text-sm  hidden md:block w-28 ">
    //         {survey.organization}
    //       </h6>
    //     </div>

    //     <div className="w-16 ">
    //       <h6 className="text-xs sm:text-sm font-semibold">Start Date</h6>
    //       <p className="text-xs">{survey.dateCreated.slice(0, 10)}</p>
    //     </div>
    //     <div className="w-16">
    //       <h6 className="text-xs sm:text-sm font-semibold">End Date</h6>
    //       <p className="text-xs">{survey.dateEnd.slice(0, 10)}</p>
    //     </div>

    //     <div className="flex ">
    //       <a
    //         className="border dark:border-0 h-10 py-1 sm:py-2 px-5 rounded-3xl text-white bg-green-600 hover:bg-green-500 hover:cursor-pointer w-20  sm:w-36 dark:bg-sky-700 dark:hover:bg-sky-600"
    //         href={`/survey/${survey._id}`}
    //       >
    //         <p className="w-full text-xs text-center">Take Survey</p>
    //       </a>
    //       <a
    //         href={`/surveyedit/${survey._id}`}
    //         className="border dark:border-slate-600 h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer hidden sm:block"
    //       >
    //         {edit}
    //       </a>
    //       <div
    //         className="border dark:border-slate-600 h-10 p-3 rounded-2xl hover:bg-slate-200 hover:cursor-pointer hidden sm:block"
    //         id={survey._id}
    //         onClick={(e) => {
    //           deleteSurvey(e);
    //         }}
    //       >
    //         {del}
    //       </div>
    //       <div className="border dark:border-slate-600 h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer hidden sm:block">
    //         {view}
    //       </div>
    //     </div>
    //     <div className="flex lg:hidden h-full align-top hover:cursor-pointer sm:hidden">
    //       {ellipsis}
    //     </div>
    //   </div>
    // </div>
  );
}

export default SurveyItem;
