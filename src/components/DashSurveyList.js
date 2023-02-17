import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useEffect } from "react";
import useFetch from "../utility/useFetch";
import ErrorImg from "../assets/error.jpg";
import Spinner from "../assets/loading-gif.gif";
import { useNavigate } from "react-router-dom";
import SurveyItem from "./SurveyItem";
const baseURL_development = "http://localhost:5000";
const baseURL = "https://surveyconnect-server.onrender.com";

function DashSurveyList({ theme }) {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
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
  console.log(surveyList);
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
    console.log(e.target.id);
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
    <div className="flex flex-col justify-center dark:bg-slate-900 dark:text-slate-200 ">
      {/*Survey List Search Utility Nav */}
      <div className="flex justify-between w-full xl:w-8/12 mx-auto border-b-2 h-20 items-center">
        {/* Survey Filter Desktop */}
        <div
          id="surveyTabs"
          className="sm:flex hidden w-52 justify-around h-full items-center"
        >
          <button
            className={
              tabActive === "All"
                ? "w-1/3 align-middle h-full hover:text-green-700 border-b-4 border-green-700 dark:border-slate-200 dark:hover:text-sky-500"
                : "w-1/3 align-middle h-full hover:text-green-700 border-b-4 border-transparent  dark:hover:text-sky-500"
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
                ? "w-1/3 align-middle h-full hover:text-green-700 border-b-4 border-green-700 dark:border-slate-200  dark:hover:text-sky-500"
                : "w-1/3 align-middle h-full hover:text-green-700 border-b-4 border-transparent  dark:hover:text-sky-500 "
            }
            value={"Active"}
            onClick={(e) => tabActivate(e)}
          >
            Active
          </button>

          <button
            className={
              tabActive === "Past"
                ? "w-1/3 align-middle h-full hover:text-green-700 border-b-4 border-green-700 dark:border-slate-200  dark:hover:text-sky-500"
                : "w-1/3 align-middle h-full hover:text-green-700 border-b-4 border-transparent  dark:hover:text-sky-500"
            }
            value={"Past"}
            onClick={(e) => tabActivate(e)}
          >
            Past
          </button>
        </div>
        {/* Survey Filter Mobile*/}
        <div
          id="selectMenu"
          className="sm:hidden flex border border-1 p-2 rounded-3xl bg-slate-200 mx-3 sm:mx-0"
        >
          <select
            name="activeTab"
            id="activeTab"
            className="outline-0 bg-transparent dark:text-slate-600"
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
          className="p-2 border border-1 border-slate-200 rounded-3xl w-80 bg-slate-200 mx-3 sm:mx-0 dark:text-slate-200 dark:bg-slate-900"
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
      {/* List of all surveys */}
      <div className=" bg-slate-200 min-h-screen dark:bg-slate-900">
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
              className="p-1 md:py-2 border border-1 border-slate-200 rounded-3xl bg-slate-200 w-20 md:w-36 text-center text-sm focus:ring focus:ring-slate-400 focus:outline-none dark:text-slate-600 dark:bg-slate-900"
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
              className="ml-1 border border-1 border-slate-200 rounded-3xl w-28 md:w-46 bg-slate-200 text-center text-sm focus:ring focus:ring-slate-400 focus:outline-none dark:text-slate-600 dark:bg-slate-900"
              onChange={(e) => {
                searchSurvey(e.target.value);
              }}
            />
          </div>
        </div>
        {tabActive === "All" && surveyList.length > 0 && (
          <SurveyItem
            survey={surveyList[0]}
            deleteSurvey={deleteSurvey}
            key={surveyList[0]._id}
          />
        )}

        {/* List of active surveys*/}
        {(tabActive === "Active" || tabActive === "All") && (
          <div>
            <div className="flex justify-between h-16 items-center  w-11/12 xl:w-8/12 mx-auto">
              <h1 className="font-bold text-md md:text-xl w-full">Active</h1>
            </div>
            {surveyList.length > 0 &&
              surveyList.map((survey) => {
                if (survey.activeStatus === true)
                  return (
                    <SurveyItem
                      survey={survey}
                      deleteSurvey={deleteSurvey}
                      key={survey._id}
                    />
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
                if (survey.activeStatus === false) {
                  return (
                    <SurveyItem
                      survey={survey}
                      deleteSurvey={deleteSurvey}
                      key={survey._id}
                    />
                  );
                }
              })}
          </div>
        )}

        {/*List of filtered surveys*/}
        {tabActive === "Custom" && (
          <div>
            <div className="flex justify-between h-16 items-center  w-11/12 xl:w-8/12 mx-auto">
              <h1 className="font-bold text-md md:text-xl w-full">Results</h1>
            </div>
            {filteredSurveys.length > 0 &&
              filteredSurveys.map((survey) => {
                return (
                  <SurveyItem
                    survey={survey}
                    deleteSurvey={deleteSurvey}
                    key={survey._id}
                  />
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default DashSurveyList;
