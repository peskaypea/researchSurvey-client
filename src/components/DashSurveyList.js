import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faX,
  faEdit,
  faEye,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useEffect } from "react";
import useFetch from "useFetch";

function DashFilter() {
  const [tabActive, setTabActive] = useState("All");
  const tabActivate = (e) => {
    setTabActive(e.target.value);
  };

  const [surveyList, setSurveyList] = useState([]);
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/surveys"
  );
  console.log(surveyList.length);
  useEffect(() => {
    setSurveyList(() => {
      return data ?? [];
    });
  }, [loading]);

  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const del = <FontAwesomeIcon icon={faX} />;
  const edit = <FontAwesomeIcon icon={faEdit} />;
  const view = <FontAwesomeIcon icon={faEye} />;
  const ellipsis = <FontAwesomeIcon icon={faEllipsisV} size={"lg"} />;

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-between w-8/12 mx-auto border-b-2 h-20 items-center">
        {/* Dashboard Navbar */}
        <div
          id="surveyTabs"
          className="sm:flex hidden w-52 justify-around h-full items-center"
        >
          <button
            className={
              tabActive === "All"
                ? "w-1/3 align-middle h-full hover:text-cyan-700 border-b-4 border-cyan-700"
                : "w-1/3 align-middle h-full hover:text-cyan-700 border-b-4 border-transparent"
            }
            value={"All"}
            onClick={(e) => {
              tabActivate(e);
            }}
          >
            All
          </button>

          <button
            className={
              tabActive === "Active"
                ? "w-1/3 align-middle h-full hover:text-cyan-700 border-b-4 border-cyan-700 "
                : "w-1/3 align-middle h-full hover:text-cyan-700 border-b-4 border-transparent "
            }
            value={"Active"}
            onClick={(e) => tabActivate(e)}
          >
            Active
          </button>

          <button
            className={
              tabActive === "Past"
                ? "w-1/3 align-middle h-full hover:text-cyan-700 border-b-4 border-cyan-700"
                : "w-1/3 align-middle h-full hover:text-cyan-700 border-b-4 border-transparent"
            }
            value={"Past"}
            onClick={(e) => tabActivate(e)}
          >
            Past
          </button>
        </div>

        {/* Survey Navbar*/}
        <div
          id="selectMenu"
          className="sm:hidden flex border border-1 p-2 rounded-3xl bg-slate-200"
        >
          {/* Survey Navbar mobile*/}
          <select name="" id="" className="outline-0 bg-transparent">
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Past">Past</option>
          </select>
        </div>

        <div
          id="searchBar"
          className="p-2 border border-1 border-slate-200 rounded-3xl w-80 bg-slate-200"
        >
          {searchIcon}
          <input
            type="text"
            placeholder="Search"
            className="ml-2 w-11/12 outline-0 bg-transparent"
          />
        </div>
      </div>

      <div className=" bg-slate-300 min-h-screen">
        <div className="flex justify-between h-16 items-center  w-11/12 xl:w-8/12 mx-auto">
          {/* List of recent surveys*/}
          <h1 className="font-bold text-md md:text-xl w-full">Recent Survey</h1>
          <div className="flex justify-end md:justify-around w-72">
            <select
              name=""
              id=""
              className="p-1 md:py-2 border border-1 border-slate-200 rounded-3xl bg-slate-200 w-20 md:w-36 text-center text-sm focus:ring focus:ring-slate-400 focus:outline-none"
            >
              <option>Type</option>
              <option value="Academic">Academic</option>
              <option value="Commercial">Commercial</option>
              <option value="Political">Politics</option>
              <option value="Socio-Economics">Socio-Economics</option>
              <option value="Personal Finance">Personal Finance</option>
            </select>
            <input
              type="date"
              className="ml-1 border border-1 border-slate-200 rounded-3xl w-28 md:w-46 bg-slate-200 text-center text-sm focus:ring focus:ring-slate-400 focus:outline-none "
            />
          </div>
        </div>
        {surveyList.length > 0 && (
          <div className="mb-1">
            <div className="flex justify-around pt-5 bg-white w-11/12 xl:w-8/12 mx-auto h-24 text-sm  text-gray-500 rounded-lg">
              <div className="md:flex md:justify-between md:w-72">
                <h6 className="font-semibold w-28">
                  {surveyList[0].surveyName}
                </h6>
                <h6 className="block md:hidden w-28">
                  {surveyList[0].surveyOwner[8] === " "
                    ? surveyList[0].surveyOwner.slice(0, 8) + "..."
                    : surveyList[0].surveyOwner}
                </h6>
                <h6 className="hidden md:block w-28">
                  {surveyList[0].surveyOwner}
                </h6>
              </div>

              <div className="w-16 ">
                <h6 className="font-semibold">Start Date</h6>
                <p className="text-xs">
                  {surveyList[0].dateCreated.slice(0, 10)}
                </p>
              </div>
              <div className="w-16">
                <h6 className="font-semibold">Start Date</h6>
                <p className="text-xs">{surveyList[0].dateEnd.slice(0, 10)}</p>
              </div>

              <div className="flex   ">
                <div className="border h-10 py-2 px-5 rounded-3xl text-white bg-cyan-700 hover:opacity-90 hover:cursor-pointer w-30 ">
                  <p>Take Survey</p>
                </div>
                <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer hidden sm:block">
                  <p>{edit}</p>
                </div>
                <div className="border h-10 p-3 rounded-2xl hover:bg-slate-200 hover:cursor-pointer hidden sm:block">
                  <p>{del}</p>
                </div>
                <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer hidden sm:block">
                  <p>{view}</p>
                </div>
              </div>
              <div className="flex lg:hidden h-full align-top hover:cursor-pointer">
                {ellipsis}
              </div>
            </div>
          </div>
        )}

        {/* List of active surveys*/}
        <div className="flex justify-between h-16 items-center  w-11/12 xl:w-8/12 mx-auto">
          <h1 className="font-bold text-md md:text-xl w-full">Active</h1>
        </div>
        {surveyList.length > 0 &&
          surveyList.map((survey) => {
            if (survey.status === true)
              return (
                <div className="mb-1">
                  <div className="flex justify-around pt-5 bg-white w-11/12 xl:w-8/12 mx-auto h-24 text-sm  text-gray-500 rounded-lg">
                    <div className="md:flex md:justify-between md:w-72">
                      <h6 className="font-semibold w-28">
                        {survey.surveyName}
                      </h6>
                      <h6 className="block md:hidden w-28">
                        {survey.surveyOwner[8] === " "
                          ? survey.surveyOwner.slice(0, 8) + "..."
                          : survey.surveyOwner}
                      </h6>
                      <h6 className="hidden md:block w-28">
                        {survey.surveyOwner}
                      </h6>
                    </div>

                    <div className="w-16 ">
                      <h6 className="font-semibold">Start Date</h6>
                      <p className="text-xs">
                        {survey.dateCreated.slice(0, 10)}
                      </p>
                    </div>
                    <div className="w-16">
                      <h6 className="font-semibold">Start Date</h6>
                      <p className="text-xs">{survey.dateEnd.slice(0, 10)}</p>
                    </div>

                    <div className="flex   ">
                      <div className="border h-10 py-2 px-5 rounded-3xl text-white bg-cyan-700 hover:opacity-90 hover:cursor-pointer w-30 ">
                        <p>Take Survey</p>
                      </div>
                      <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer sm:block hidden">
                        <p>{edit}</p>
                      </div>
                      <div className="border h-10 p-3 rounded-2xl hover:bg-slate-200 hover:cursor-pointer sm:block hidden">
                        <p>{del}</p>
                      </div>
                      <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer sm:block hidden">
                        <p>{view}</p>
                      </div>
                    </div>
                    <div className="flex lg:hidden h-full align-top hover:cursor-pointer">
                      {ellipsis}
                    </div>
                  </div>
                </div>
              );
          })}

        {/* List of past surveys*/}
        <div className="flex justify-between h-16 items-center  w-11/12 xl:w-8/12 mx-auto">
          <h1 className="font-bold text-md md:text-xl w-full">Past</h1>
        </div>
        <div className="mb-1">
          <div className="flex justify-around pt-5 bg-white w-11/12 xl:w-8/12 mx-auto h-24 text-sm  text-gray-500 rounded-lg">
            <div className="md:flex md:justify-between md:w-72">
              <h6 className="font-semibold w-28">Survey Name</h6>
              <h6 className="block md:hidden w-28">Survey Owner</h6>
              <h6 className="hidden md:block w-28">Survey Owner</h6>
            </div>

            <div className="w-16 ">
              <h6 className="font-semibold">Start Date</h6>
              <p className="text-xs">01-01-1976</p>
            </div>
            <div className="w-16">
              <h6 className="font-semibold">Start Date</h6>
              <p className="text-xs">01-01-1977</p>
            </div>

            <div className="lg:flex hidden  ">
              <div className="border h-10 py-2 px-5 rounded-3xl text-white bg-cyan-700 hover:opacity-90 hover:cursor-pointer w-30 ">
                <p>Take Survey</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer sm:block hidden">
                <p>{edit}</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl hover:bg-slate-200 hover:cursor-pointer sm:block hidden">
                <p>{del}</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer sm:block hidden">
                <p>{view}</p>
              </div>
            </div>
            <div className="flex lg:hidden h-full align-top hover:cursor-pointer ">
              {ellipsis}
            </div>
          </div>
        </div>
        <div className="mb-1">
          <div className="flex justify-around pt-5 bg-white w-11/12 xl:w-8/12 mx-auto h-24 text-sm  text-gray-500 rounded-lg">
            <div className="md:flex md:justify-between md:w-72">
              <h6 className="font-semibold w-28">Survey Name</h6>
              <h6 className="block md:hidden w-28">Survey Owner</h6>
              <h6 className="hidden md:block w-28">Survey Owner</h6>
            </div>

            <div className="w-16 ">
              <h6 className="font-semibold">Start Date</h6>
              <p className="text-xs">01-01-1976</p>
            </div>
            <div className="w-16">
              <h6 className="font-semibold">Start Date</h6>
              <p className="text-xs">01-01-1977</p>
            </div>

            <div className="lg:flex hidden  ">
              <div className="border h-10 py-2 px-5 rounded-3xl text-white bg-cyan-700 hover:opacity-90 hover:cursor-pointer w-30 ">
                <p>Take Survey</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer sm:block hidden">
                <p>{edit}</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl hover:bg-slate-200 hover:cursor-pointer sm:block hidden">
                <p>{del}</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer sm:block hidden">
                <p>{view}</p>
              </div>
            </div>
            <div className="flex lg:hidden h-full align-top hover:cursor-pointer ">
              {ellipsis}
            </div>
          </div>
        </div>
        <div className="mb-1">
          <div className="flex justify-around pt-5 bg-white w-11/12 xl:w-8/12 mx-auto h-24 text-sm  text-gray-500 rounded-lg">
            <div className="md:flex md:justify-between md:w-72">
              <h6 className="font-semibold w-28">Survey Name</h6>
              <h6 className="block md:hidden w-28">Survey Owner</h6>
              <h6 className="hidden md:block w-28">Survey Owner</h6>
            </div>

            <div className="w-16 ">
              <h6 className="font-semibold">Start Date</h6>
              <p className="text-xs">01-01-1976</p>
            </div>
            <div className="w-16">
              <h6 className="font-semibold">Start Date</h6>
              <p className="text-xs">01-01-1977</p>
            </div>

            <div className="lg:flex hidden  ">
              <div className="border h-10 py-2 px-5 rounded-3xl text-white bg-cyan-700 hover:opacity-90 hover:cursor-pointer w-30 ">
                <p>Take Survey</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer sm:block hidden">
                <p>{edit}</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl hover:bg-slate-200 hover:cursor-pointer sm:block hidden">
                <p>{del}</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer sm:block hidden">
                <p>{view}</p>
              </div>
            </div>
            <div className="flex lg:hidden h-full align-top hover:cursor-pointer ">
              {ellipsis}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashFilter;
