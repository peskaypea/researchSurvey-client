import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faX,
  faEdit,
  faEye,
  faEllipsisV,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useEffect } from "react";
import useFetch from "../utility/useFetch";
import ErrorImg from "../assets/error.jpg";
import Spinner from "../assets/loading-gif.gif";
import { useNavigate } from "react-router-dom";
import "animate.css";
const baseURL_development = "http://localhost:5000";
const baseURL = "https://surveyconnect-server.onrender.com";

function DashSurveyList() {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const del = <FontAwesomeIcon icon={faX} />;
  const edit = <FontAwesomeIcon icon={faEdit} />;
  const view = <FontAwesomeIcon icon={faEye} />;
  const ellipsis = <FontAwesomeIcon icon={faEllipsisV} size={"lg"} />;
  const lock = <FontAwesomeIcon icon={faLock} size={"sm"} />;

  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  //Fetch data from db
  const {
    data = [],
    loading,
    error,
  } = useFetch(`${baseURL_development}/survey`, token);

  const [surveyList, setSurveyList] = useState([]);
  const [tabActive, setTabActive] = useState("All");
  const [filteredSurveys, setFilteredSurveys] = useState([]);

  const tabActivate = (e) => {
    setTabActive(e.target.value);
  };

  //Set tab in surveyList navbar
  const searchSurvey = (value) => {
    if (value === "") {
      setTabActive("All");
      return;
    }

    //Logic for filtering surveys using search bar and date picker
    const filteredSurvey = surveyList.filter((survey) => {
      return (
        survey.surveyName.toLowerCase().includes(value) ||
        survey.organization.toLowerCase().includes(value) ||
        survey.dateCreated.toString().slice(0, 10) === value
      );
    });
    console.log(filteredSurvey);
    setTabActive("Custom");
    setFilteredSurveys(filteredSurvey);
  };

  const deleteSurvey = async (e) => {
    let id = "";
    if (e.target.id) {
      id = e.target.id;
    } else if (e.target.parentNode.id) {
      id = e.target.parentNode.id;
    } else {
      id = e.target.parentNode.parentNode.id;
    }

    await fetch(`${baseURL}/survey/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      const newData = surveyList.filter((survey) => survey._id !== id);
      setSurveyList(newData);

      console.log(res);
    });
  };

  useEffect(() => {
    //Check if there is token in localstorage
    if (token) {
      //Check if token is valid by checking the data got back is an array of surveys or an error.
      if (!Array.isArray(data)) {
        //If token is invalid, remove token from localstorage
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        //If token valid, set data for rendering
        const list = data.map((survey) => {
          return { ...survey, isDelete: false };
        });
        setSurveyList(list);
      }
    } else {
      //If token doesn't exists, redirect to login page
      navigate("/login");
    }
  }, [loading]);

  //Error Message
  if (error) {
    return (
      <div className=" flex flex-col items-center mt-36">
        <img src={ErrorImg} alt="" className="w-1/6" />
        <h3 className="text-3xl mb-5">Something's wrong</h3>
        <h3 className="text-xl">We were unable to retrieve any data.</h3>
      </div>
    );
  }

  //Loading animation
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center w-full mt-36">
        <img src={Spinner} alt="" className="w-8 mb-2" />
        <h3>Retrieving data.</h3>
      </div>
    );
  }

  //Return List of all surveys
  return (
    <div className="flex flex-col justify-center ">
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
          <select
            name="activeTab"
            id="activeTab"
            className="outline-0 bg-transparent"
            onChange={(e) => tabActivate(e)}
          >
            <option value={"All"}>All</option>
            <option value={"Active"}>Active</option>
            <option value={"Past"}>Past</option>
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
              searchSurvey(e.target.value.toLowerCase());
            }}
          />
        </div>
      </div>

      <div className=" bg-slate-300 min-h-screen">
        <div className="flex justify-between h-16 items-center  w-11/12 xl:w-8/12 mx-auto">
          {/* List of recent surveys*/}
          {tabActive === "All" && (
            <h1 className="font-bold text-md md:text-xl w-full">
              Recent Survey
            </h1>
          )}
          <div
            className={
              tabActive === "All"
                ? "flex justify-end md:justify-around w-72"
                : "flex justify-end md:justify-end w-full"
            }
          >
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
                searchSurvey(e.target.value);
              }}
            />
          </div>
        </div>
        {tabActive === "All" && surveyList.length > 0 && (
          <div className="mb-1">
            <div className="flex justify-around pt-5 bg-white w-11/12 xl:w-8/12 mx-auto h-24 text-sm  text-gray-500 rounded-lg">
              <div className="md:flex md:justify-around  w-20 md:w-72">
                <h6 className="text-center text-xs sm:text-sm font-semibold truncate md:hidden w-24 ">
                  {surveyList[0].surveyName}
                </h6>
                <h6 className="text-center text-xs sm:text-sm font-semibold  hidden md:block w-28 ">
                  {surveyList[0].surveyName}
                </h6>
                <h6 className="text-center text-xs  sm:text-sm truncate md:hidden w-24 ">
                  {surveyList[0].organization}
                </h6>
                <h6 className="text-center text-xs  sm:text-sm  hidden md:block w-28 ">
                  {surveyList[0].organization}
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

              <div className="flex ">
                <a
                  className="border h-10 py-1 sm:py-2 px-5 rounded-3xl text-white bg-cyan-800 hover:opacity-90 hover:cursor-pointer w-20  sm:w-36 "
                  href={`/survey/${surveyList[0]._id}`}
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
                  id={surveyList[0]._id}
                  onClick={(e) => {
                    deleteSurvey(e);
                  }}
                >
                  {del}
                </div>
                <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer hidden sm:block">
                  {view}
                </div>
                {!surveyList[0].public && (
                  <div className=" h-10 py-3 rounded-2xl hidden sm:block">
                    {lock}
                  </div>
                )}
              </div>
              <div className="flex lg:hidden h-full align-top hover:cursor-pointer sm:hidden">
                {ellipsis}
              </div>
              {!surveyList[0].public && (
                <div className="flex lg:hidden h-full align-top sm:hidden">
                  {lock}
                </div>
              )}
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
                    <div className="mb-1 " key={survey._id}>
                      <div className="flex justify-around pt-5 bg-white w-11/12 xl:w-8/12 mx-auto h-24 text-sm  text-gray-500 rounded-lg">
                        <div className="md:flex md:justify-around   w-20 md:w-72">
                          <h6 className="text-center text-xs sm:text-sm font-semibold truncate md:hidden w-24 ">
                            {survey.surveyName}
                          </h6>
                          <h6 className="text-center text-xs sm:text-sm font-semibold  hidden md:block w-28 ">
                            {survey.surveyName}
                          </h6>
                          <h6 className="text-center text-xs  sm:text-sm truncate md:hidden w-24 ">
                            {survey.organization}
                          </h6>
                          <h6 className="text-center text-xs  sm:text-sm  hidden md:block w-28 ">
                            {survey.organization}
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

                        <div className="flex">
                          <a
                            className="border h-10 py-1 sm:py-2 px-5 rounded-3xl text-white bg-cyan-800 hover:opacity-90 hover:cursor-pointer w-20 sm:w-36 "
                            href={`/survey/${survey._id}`}
                          >
                            <p className="w-full text-xs text-center">
                              Take Survey
                            </p>
                          </a>
                          <div
                            className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer sm:block hidden"
                            id={survey._id}
                          >
                            {edit}
                          </div>
                          <div
                            className="border h-10 p-3 rounded-2xl hover:bg-slate-200 hover:cursor-pointer sm:block hidden"
                            id={survey._id}
                            onClick={(e) => {
                              deleteSurvey(e);
                            }}
                          >
                            {del}
                          </div>
                          <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer sm:block hidden">
                            <p>{view}</p>
                          </div>
                          {!survey.public && (
                            <div className=" h-10 py-3 rounded-2xl  hidden sm:block">
                              {lock}
                            </div>
                          )}
                        </div>
                        <div className="flex sm:hidden h-full align-top hover:cursor-pointer">
                          {ellipsis}
                        </div>
                        {!survey.public && (
                          <div className="flex lg:hidden h-full align-top  sm:hidden">
                            {lock}
                          </div>
                        )}
                      </div>
                    </div>
                  );
              })}
          </div>
        )}

        {/* List of past surveys*/}
        {(tabActive === "Past" || tabActive === "All") && (
          <div className="mb-20">
            <div className="flex justify-between h-16 items-center  w-11/12 xl:w-8/12 mx-auto">
              <h1 className="font-bold text-md md:text-xl w-full">Past</h1>
            </div>
            {surveyList.length > 0 &&
              surveyList.map((survey) => {
                if (survey.status === false) {
                  return (
                    <div className="mb-1" key={survey._id}>
                      <div className="flex justify-around pt-5 bg-white w-11/12 xl:w-8/12 mx-auto h-24 text-sm  text-gray-500 rounded-lg">
                        <div className="md:flex md:justify-around   w-20 md:w-72">
                          <h6 className="text-center text-xs sm:text-sm font-semibold truncate md:hidden w-24 ">
                            {survey.surveyName}
                          </h6>
                          <h6 className="text-center text-xs sm:text-sm font-semibold  hidden md:block w-28 ">
                            {survey.surveyName}
                          </h6>
                          <h6 className="text-center text-xs  sm:text-sm truncate md:hidden w-24 ">
                            {survey.organization}
                          </h6>
                          <h6 className="text-center text-xs  sm:text-sm  hidden md:block w-28 ">
                            {survey.organization}
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

                        <div className="flex">
                          <a
                            className="border h-10 py-1 sm:py-2 px-5 rounded-3xl text-white bg-cyan-800 hover:opacity-90 hover:cursor-pointer w-20 sm:w-36 "
                            href={`survey/${survey._id}`}
                          >
                            <p className="w-full text-xs text-center">
                              View Survey
                            </p>
                          </a>
                          <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer sm:block hidden">
                            <p>{edit}</p>
                          </div>
                          <div
                            className="border h-10 p-3 rounded-2xl hover:bg-slate-200 hover:cursor-pointer sm:block hidden"
                            id={survey._id}
                            onClick={(e) => {
                              deleteSurvey(e);
                            }}
                          >
                            {del}
                          </div>
                          <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer sm:block hidden">
                            <p>{view}</p>
                          </div>
                          {!survey.public && (
                            <div className=" h-10 py-3 rounded-2xl   hidden sm:block hidden">
                              {lock}
                            </div>
                          )}
                        </div>
                        <div className="flex sm:hidden h-full align-top hover:cursor-pointer">
                          {ellipsis}
                        </div>
                        {!survey.public && (
                          <div className="flex sm:hidden h-full align-top ">
                            {lock}
                          </div>
                        )}
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
                        <h6 className="text-center text-xs sm:text-sm font-semibold w-24 sm:w-28">
                          {survey.surveyName.slice(0, 18)}
                        </h6>
                        <h6 className="text-center text-xs sm:text-sm   w-24 sm:w-28">
                          {survey.organization.slice(0, 8)}
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

                      <div className="flex">
                        <a
                          className="border h-10 py-1 sm:py-2 px-5 rounded-3xl text-white bg-cyan-700 hover:opacity-90 hover:cursor-pointer w-20 sm:w-36 "
                          href={`/survey/${survey._id}`}
                        >
                          {survey.status ? (
                            <p className="w-full text-xs text-center">
                              Take Survey
                            </p>
                          ) : (
                            <p className="w-full text-xs text-center">
                              View Survey
                            </p>
                          )}
                        </a>
                        <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer sm:block hidden">
                          <p>{edit}</p>
                        </div>
                        <div
                          className="border h-10 p-3 rounded-2xl hover:bg-slate-200 hover:cursor-pointer sm:block hidden"
                          id={survey._id}
                          onClick={(e) => {
                            deleteSurvey(e);
                          }}
                        >
                          {del}
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

export default DashSurveyList;
