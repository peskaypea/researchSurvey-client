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
import ErrorImg from "../assets/error.jpg";
import Spinner from "../assets/loading-gif.gif";

function DashFilter() {
  const { data, loading, err } = useFetch("http://localhost:5000/api/surveys");
  const [surveyList, setSurveyList] = useState([]);
  const [tabActive, setTabActive] = useState("All");
  const [filteredSurveys, setFilteredSurveys] = useState([]);
  console.log(filteredSurveys);
  const tabActivate = (e) => {
    setTabActive(e.target.value);
  };

  const searchSurvey = (value) => {
    const filteredSurvey = surveyList.filter((survey) => {
      return (
        survey.surveyName.toLowerCase().includes(value) ||
        survey.surveyOwner.toLowerCase().includes(value)
      );
    });
    console.log(filteredSurvey);
    setTabActive("Custom");
    setFilteredSurveys(filteredSurvey);
  };
  const filterByDate = (e) => {
    const array = surveyList.filter((survey) => {
      return survey.dateCreated.toString().slice(0, 10) === e.target.value;
    });
    console.log(array);
  };
  useEffect(() => {
    setSurveyList(() => {
      return data ?? [];
    });
  }, [loading, err, data]);

  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const del = <FontAwesomeIcon icon={faX} />;
  const edit = <FontAwesomeIcon icon={faEdit} />;
  const view = <FontAwesomeIcon icon={faEye} />;
  const ellipsis = <FontAwesomeIcon icon={faEllipsisV} size={"lg"} />;

  //Error Message
  if (err) {
    return (
      <div className=" flex flex-col items-center mt-36">
        <img src={ErrorImg} alt="" className="w-1/6" />
        <h3 className="text-3xl mb-5">Something's wrong</h3>
        <h3 className="text-xl">We're unable to retrieve data.</h3>
      </div>
    );
  }

  //Loading animation
  if (loading) {
    return (
      <div className="flex  justify-center items-center w-full mt-36">
        <img src={Spinner} alt="" className="w-8" />
      </div>
    );
  }

  //Return List of all surveys
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-between w-full xl:w-8/12 mx-auto border-b-2 h-20 items-center">
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
          className="sm:hidden flex border border-1 p-2 rounded-3xl bg-slate-200 mx-3 sm:mx-0"
        >
          {/* Survey Navbar mobile*/}
          <select name="" id="" className="outline-0 bg-transparent">
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Past">Past</option>
          </select>
        </div>
        {/* Search bar */}
        <div
          id="searchBar"
          className="p-2 border border-1 border-slate-200 rounded-3xl w-80 bg-slate-200 mx-3 sm:mx-0"
        >
          {searchIcon}
          <input
            type="text"
            placeholder="Search"
            className="ml-2 w-9/12 outline-0 bg-transparent"
            onChange={(e) => {
              searchSurvey(e.target.value);
            }}
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
              onChange={(e) => {
                filterByDate(e);
              }}
            />
          </div>
        </div>
        {surveyList.length > 0 && (
          <div className="mb-1">
            <div className="flex justify-around pt-5 bg-white w-11/12 xl:w-8/12 mx-auto h-24 text-sm  text-gray-500 rounded-lg">
              <div className="md:flex md:justify-around  w-20 md:w-72">
                <h6 className="text-center text-xs sm:text-sm font-semibold w-24 sm:w-28">
                  {surveyList[0].surveyName.slice(0, 18)}
                </h6>
                <h6 className="text-center text-xs sm:text-sm block w-24 sm:w-28">
                  {surveyList[0].surveyOwner[8] === " "
                    ? surveyList[0].surveyOwner.slice(0, 8) + "..."
                    : surveyList[0].surveyOwner}
                </h6>
              </div>

              <div className="w-16 ">
                <h6 className="text-xs sm:text-sm font-semibold">Start Date</h6>
                <p className="text-xs">
                  {surveyList[0].dateCreated.slice(0, 10)}
                </p>
              </div>
              <div className="w-16">
                <h6 className="text-xs sm:text-sm font-semibold">End Date</h6>
                <p className="text-xs">{surveyList[0].dateEnd.slice(0, 10)}</p>
              </div>

              <div className="flex   ">
                <div className="border h-10 py-1 sm:py-2 px-5 rounded-3xl text-white bg-cyan-700 hover:opacity-90 hover:cursor-pointer w-20  sm:w-36 ">
                  <p className="w-full text-xs text-center">Take Survey</p>
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
              <div className="flex lg:hidden h-full align-top hover:cursor-pointer sm:hidden">
                {ellipsis}
              </div>
            </div>
          </div>
        )}

        {/* List of active surveys*/}
        {(tabActive === "Active" || tabActive === "All") && (
          <div>
            <div className="flex justify-between h-16 items-center  w-11/12 xl:w-8/12 mx-auto">
              <h1 className="font-bold text-md md:text-xl w-full">Active</h1>
            </div>
            {surveyList.length > 0 &&
              surveyList.map((survey) => {
                if (survey.status === true)
                  return (
                    <div className="mb-1" key={survey._id}>
                      <div className="flex justify-around pt-5 bg-white w-11/12 xl:w-8/12 mx-auto h-24 text-sm  text-gray-500 rounded-lg">
                        <div className="md:flex md:justify-around   w-20 md:w-72">
                          <h6 className="text-center text-xs sm:text-sm font-semibold w-24 sm:w-28">
                            {survey.surveyName.slice(0, 18)}
                          </h6>
                          <h6 className="text-center text-xs sm:text-sm  w-24 sm:w-28">
                            {survey.surveyOwner[8] === " "
                              ? survey.surveyOwner.slice(0, 8)
                              : survey.surveyOwner}
                          </h6>
                        </div>

                        <div className="w-16 ">
                          <h6 className="text-xs sm:text-sm font-semibold">
                            Start Date
                          </h6>
                          <p className="text-xs">
                            {survey.dateCreated.slice(0, 10)}
                          </p>
                        </div>
                        <div className="w-16">
                          <h6 className="text-xs sm:text-sm font-semibold">
                            End Date
                          </h6>
                          <p className="text-xs">
                            {survey.dateEnd.slice(0, 10)}
                          </p>
                        </div>

                        <div className="flex   ">
                          <div className="border h-10 py-1 sm:py-2 px-5 rounded-3xl text-white bg-cyan-700 hover:opacity-90 hover:cursor-pointer w-20 sm:w-36 ">
                            <p className="w-full text-xs text-center">
                              Take Survey
                            </p>
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
                        <div className="flex sm:hidden h-full align-top hover:cursor-pointer">
                          {ellipsis}
                        </div>
                      </div>
                    </div>
                  );
              })}
          </div>
        )}

        {/* List of past surveys*/}
        {(tabActive === "Past" || tabActive === "All") && (
          <div>
            <div className="flex justify-between h-16 items-center  w-11/12 xl:w-8/12 mx-auto">
              <h1 className="font-bold text-md md:text-xl w-full">Past</h1>
            </div>
            {surveyList.length > 0 &&
              surveyList.map((survey) => {
                if (survey.status === false) {
                  return (
                    <div className="mb-1" key={survey._id}>
                      <div className="flex justify-around pt-5 bg-white w-11/12 xl:w-8/12 mx-auto h-24 text-sm  text-gray-500 rounded-lg">
                        <div className="md:flex md:justify-around w-20 md:w-72">
                          <h6 className="text-center text-xs sm:text-sm font-semibold w-full sm:w-28">
                            {survey.surveyName.slice(0, 18)}
                          </h6>
                          <h6 className="text-center text-xs sm:text-sm block md:hidden w-full sm:w-28">
                            {survey.surveyOwner.slice(0, 8)}
                          </h6>
                          <h6 className=" text-xs sm:text-sm hidden md:block w-full sm:w-28">
                            {survey.surveyOwner}
                          </h6>
                        </div>

                        <div className="w-16 ">
                          <h6 className="text-xs sm:text-sm font-semibold">
                            Start Date
                          </h6>
                          <p className="text-xs">
                            {survey.dateCreated.slice(0, 10)}
                          </p>
                        </div>
                        <div className="w-16">
                          <h6 className="text-xs sm:text-sm font-semibold">
                            End Date
                          </h6>
                          <p className="text-xs">
                            {survey.dateEnd.slice(0, 10)}
                          </p>
                        </div>

                        <div className="flex   ">
                          <div className="border h-10 py-1 sm:py-2 px-5 rounded-3xl text-white bg-cyan-700 hover:opacity-90 hover:cursor-pointer w-20 sm:w-36 ">
                            <p className="w-full text-xs text-center">
                              Take Survey
                            </p>
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
                        <div className="flex sm:hidden h-full align-top hover:cursor-pointer ">
                          {ellipsis}
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        )}

        {/*List of filtered surveys*/}
        {tabActive === "Custom" && (
          <div>
            <div className="flex justify-between h-16 items-center  w-11/12 xl:w-8/12 mx-auto">
              <h1 className="font-bold text-md md:text-xl w-full">Result</h1>
            </div>
            {filteredSurveys.length > 0 &&
              filteredSurveys.map((survey) => {
                return (
                  <div className="mb-1" key={survey._id}>
                    <div className="flex justify-around pt-5 bg-white w-11/12 xl:w-8/12 mx-auto h-24 text-sm  text-gray-500 rounded-lg">
                      <div className="md:flex md:justify-around w-20 md:w-72">
                        <h6 className="text-center text-xs sm:text-sm font-semibold w-full sm:w-28">
                          {survey.surveyName.slice(0, 18)}
                        </h6>
                        <h6 className="text-center text-xs sm:text-sm block md:hidden w-full w-4 sm:w-28">
                          {survey.surveyOwner.slice(0, 8)}
                        </h6>
                      </div>

                      <div className="w-16 ">
                        <h6 className="text-xs sm:text-sm font-semibold">
                          Start Date
                        </h6>
                        <p className="text-xs">
                          {survey.dateCreated.slice(0, 10)}
                        </p>
                      </div>
                      <div className="w-16">
                        <h6 className="text-xs sm:text-sm font-semibold">
                          End Date
                        </h6>
                        <p className="text-xs">{survey.dateEnd.slice(0, 10)}</p>
                      </div>

                      <div className="flex   ">
                        <div className="border h-10 py-1 sm:py-2 px-5 rounded-3xl text-white bg-cyan-700 hover:opacity-90 hover:cursor-pointer w-20 sm:w-36 ">
                          <p className="w-full text-xs text-center">
                            Take Survey
                          </p>
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
                      <div className="flex sm:hidden h-full align-top hover:cursor-pointer ">
                        {ellipsis}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default DashFilter;
