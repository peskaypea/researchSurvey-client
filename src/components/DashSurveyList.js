import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faX,
  faEdit,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
function DashFilter() {
  const [tabActive, setTabActive] = useState("All");
  console.log(tabActive);
  const tabActivate = (e) => {
    setTabActive(e.target.value);
  };
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const del = <FontAwesomeIcon icon={faX} />;
  const edit = <FontAwesomeIcon icon={faEdit} />;
  const view = <FontAwesomeIcon icon={faEye} />;

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-around  border-b-2 h-20 items-center">
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
                ? "w-1/3 align-middle h-full hover:text-cyan-700 border-b-4 border-cyan-700"
                : "w-1/3 align-middle h-full hover:text-cyan-700 border-b-4 border-transparent"
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
        <div
          id="selectMenu"
          className="sm:hidden flex border border-1 p-2 rounded-3xl bg-slate-200"
        >
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
        <div className="flex justify-between h-20 items-center  w-8/12 mx-auto">
          <h1 className="font-bold text-xl">Recent Survey</h1>
          <div className="flex justify-around w-72">
            <select
              name=""
              id=""
              className="py-2 border border-1 border-slate-200 rounded-3xl bg-slate-200 w-36 text-center  text-sm"
            >
              <option>Type</option>
              <option value="Academic">Academic</option>
              <option value="Commercial">Commercial</option>
              <option value="Political">Political</option>
              <option value="Social">Social</option>
              <option value="Personal Finance">Personal Finance</option>
            </select>
            <input
              type="date"
              className=" border border-1 border-slate-200 rounded-3xl w-46 bg-slate-200 text-center text-sm"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-around pt-5 bg-white w-8/12 mx-auto h-24 text-sm  text-gray-500 rounded-lg">
            <h6 className="font-semibold">Survey Name</h6>
            <h6>Company Name</h6>
            <div>
              <h6 className="font-semibold">Start Date</h6>
              <p className="text-xs">2023-01-26</p>
            </div>
            <div>
              <h6 className="font-semibold">Start Date</h6>
              <p className="text-xs">2023-02-26</p>
            </div>
            <div className="border h-10 py-2 px-5 rounded-3xl text-white bg-cyan-700 hover:opacity-90 hover:cursor-pointer">
              <p>Take Survey</p>
            </div>
            <div className="flex  ">
              <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer">
                <p>{edit}</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl hover:bg-slate-200 hover:cursor-pointer">
                <p>{del}</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer">
                <p>{view}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between h-20 items-center  w-8/12 mx-auto">
          <h1 className="font-bold text-xl">Active</h1>
        </div>
        <div className="mb-1">
          <div className="flex justify-around pt-5 bg-white w-8/12 mx-auto h-24 text-sm  text-gray-500 rounded-lg">
            <h6 className="font-semibold">Survey Name</h6>
            <h6>Company Name</h6>
            <div>
              <h6 className="font-semibold">Start Date</h6>
              <p className="text-xs">2023-01-26</p>
            </div>
            <div>
              <h6 className="font-semibold">Start Date</h6>
              <p className="text-xs">2023-02-26</p>
            </div>
            <div className="border h-10 py-2 px-5 rounded-3xl text-white bg-cyan-700 hover:opacity-90 hover:cursor-pointer">
              <p>Take Survey</p>
            </div>
            <div className="flex  ">
              <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer">
                <p>{edit}</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl hover:bg-slate-200 hover:cursor-pointer">
                <p>{del}</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer">
                <p>{view}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-1">
          <div className="flex justify-around pt-5 bg-white w-8/12 mx-auto h-24 text-sm  text-gray-500 rounded-lg">
            <h6 className="font-semibold">Survey Name</h6>
            <h6>Company Name</h6>
            <div>
              <h6 className="font-semibold">Start Date</h6>
              <p className="text-xs">2023-01-26</p>
            </div>
            <div>
              <h6 className="font-semibold">Start Date</h6>
              <p className="text-xs">2023-02-26</p>
            </div>
            <div className="border h-10 py-2 px-5 rounded-3xl text-white bg-cyan-700 hover:opacity-90 hover:cursor-pointer">
              <p>Take Survey</p>
            </div>
            <div className="flex  ">
              <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer">
                <p>{edit}</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl hover:bg-slate-200 hover:cursor-pointer">
                <p>{del}</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer">
                <p>{view}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-1">
          <div className="flex justify-around pt-5 bg-white w-8/12 mx-auto h-24 text-sm  text-gray-500 rounded-lg">
            <h6 className="font-semibold">Survey Name</h6>
            <h6>Company Name</h6>
            <div>
              <h6 className="font-semibold">Start Date</h6>
              <p className="text-xs">2023-01-26</p>
            </div>
            <div>
              <h6 className="font-semibold">Start Date</h6>
              <p className="text-xs">2023-02-26</p>
            </div>
            <div className="border h-10 py-2 px-5 rounded-3xl text-white bg-cyan-700 hover:opacity-90 hover:cursor-pointer">
              <p>Take Survey</p>
            </div>
            <div className="flex  ">
              <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer">
                <p>{edit}</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl hover:bg-slate-200 hover:cursor-pointer">
                <p>{del}</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer">
                <p>{view}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between h-20 items-center  w-8/12 mx-auto">
          <h1 className="font-bold text-xl">Past</h1>
        </div>
        <div className="mb-1">
          <div className="flex justify-around pt-5 bg-white w-8/12 mx-auto h-24 text-sm  text-gray-500 rounded-lg">
            <h6 className="font-semibold">Survey Name</h6>
            <h6>Company Name</h6>
            <div>
              <h6 className="font-semibold">Start Date</h6>
              <p className="text-xs">2023-01-26</p>
            </div>
            <div>
              <h6 className="font-semibold">Start Date</h6>
              <p className="text-xs">2023-02-26</p>
            </div>
            <div className="border h-10 py-2 px-5 rounded-3xl text-white bg-cyan-700 hover:opacity-90 hover:cursor-pointer">
              <p>Take Survey</p>
            </div>
            <div className="flex  ">
              <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer">
                <p>{edit}</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl hover:bg-slate-200 hover:cursor-pointer">
                <p>{del}</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer">
                <p>{view}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-1">
          <div className="flex justify-around pt-5 bg-white w-8/12 mx-auto h-24 text-sm  text-gray-500 rounded-lg">
            <h6 className="font-semibold">Survey Name</h6>
            <h6>Company Name</h6>
            <div>
              <h6 className="font-semibold">Start Date</h6>
              <p className="text-xs">2023-01-26</p>
            </div>
            <div>
              <h6 className="font-semibold">Start Date</h6>
              <p className="text-xs">2023-02-26</p>
            </div>
            <div className="border h-10 py-2 px-5 rounded-3xl text-white bg-cyan-700 hover:opacity-90 hover:cursor-pointer">
              <p>Take Survey</p>
            </div>
            <div className="flex  ">
              <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer">
                <p>{edit}</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl hover:bg-slate-200 hover:cursor-pointer">
                <p>{del}</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer">
                <p>{view}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-1">
          <div className="flex justify-around pt-5 bg-white w-8/12 mx-auto h-24 text-sm  text-gray-500 rounded-lg">
            <h6 className="font-semibold">Survey Name</h6>
            <h6>Company Name</h6>
            <div>
              <h6 className="font-semibold">Start Date</h6>
              <p className="text-xs">2023-01-26</p>
            </div>
            <div>
              <h6 className="font-semibold">Start Date</h6>
              <p className="text-xs">2023-02-26</p>
            </div>
            <div className="border h-10 py-2 px-5 rounded-3xl text-white bg-cyan-700 hover:opacity-90 hover:cursor-pointer">
              <p>Take Survey</p>
            </div>
            <div className="flex  ">
              <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer">
                <p>{edit}</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl hover:bg-slate-200 hover:cursor-pointer">
                <p>{del}</p>
              </div>
              <div className="border h-10 p-3 rounded-2xl mx-2 hover:bg-slate-200 hover:cursor-pointer">
                <p>{view}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashFilter;
