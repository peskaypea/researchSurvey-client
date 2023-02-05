import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPlay,
  faUserEdit,
  faNetworkWired,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import UserImage from "../assets/empty_img.svg";
import Spinner from "../assets/loading-gif.gif";

const User = (
  <FontAwesomeIcon
    icon={faUser}
    style={{ paddingRight: "5px" }}
  ></FontAwesomeIcon>
);
const Arrow = <FontAwesomeIcon icon={faPlay} size={"xs"}></FontAwesomeIcon>;
const ArrowDown = (
  <FontAwesomeIcon icon={faArrowDown} size={"xs"}></FontAwesomeIcon>
);
const UserEdit = (
  <FontAwesomeIcon
    icon={faUserEdit}
    style={{ paddingRight: "5px" }}
  ></FontAwesomeIcon>
);
const Activity = (
  <FontAwesomeIcon
    icon={faNetworkWired}
    style={{ paddingRight: "5px" }}
  ></FontAwesomeIcon>
);

function UserCard({ user, loading }) {
  const [tab, setTab] = useState("Profile");
  console.log(user);
  const changeTab = (e) => {
    if (e.target.value) {
      setTab(e.target.value);
    }
  };
  return (
    <div>
      {!loading && (
        <div className="w-11/12 sm:w-5/6 lg:w-3/5 2xl:w-1/2 mx-auto">
          <div className="mb-10">
            <h1 className="text-sky-50 text-2xl">
              {User}{" "}
              {user.firstName
                ? `${user.firstName} ${user.lastName}`
                : "User Profile"}
            </h1>
            <h6 className="text-sky-50 flex gap-2 text-sm">
              <a href="/dashboard">Survey Connect</a>
              <span>{Arrow} </span>
              <span>{tab}</span>
            </h6>
          </div>
          <div className="flex flex-col bg-white rounded-3xl">
            {/* UserDash Nav */}
            <div className="flex rounded-t-3xl border-b border-neutral-200">
              <div className="ml-4 flex justify-start w-full sm:w-3/5 md:1/3 h-20 items-center text-slate-700 ">
                <button
                  className={
                    tab === "Profile"
                      ? "border-b-2 border-cyan-900 h-full flex items-center hover:cursor-pointer "
                      : "h-full flex items-center hover:cursor-pointer "
                  }
                  value="Profile"
                  onClick={(e) => {
                    changeTab(e);
                  }}
                >
                  {User} Profile
                </button>
                <button
                  className={
                    tab === "Edit Profile"
                      ? "border-b-2 border-cyan-900 h-full flex items-center hover:cursor-pointer mx-5"
                      : "h-full flex items-center hover:cursor-pointer mx-5"
                  }
                  value="Edit Profile"
                  onClick={(e) => {
                    changeTab(e);
                  }}
                >
                  {UserEdit} Edit Profile
                </button>
                <button
                  className={
                    tab === "Activity"
                      ? "border-b-2 border-cyan-900 h-full flex items-center hover:cursor-pointer"
                      : "h-full flex items-center hover:cursor-pointer"
                  }
                  value="Activity"
                  onClick={(e) => {
                    changeTab(e);
                  }}
                >
                  {Activity} Activity
                </button>
              </div>
            </div>
            {/*User Card Main Content */}
            {tab === "Profile" && (
              <div className="md:flex md:flex-row justify-center items-start flex flex-col mt-10">
                {/* Profile image */}
                <div className="md:w-1/2 mx-auto md:mx-5 mb-2">
                  <div className=" bg-sky-50 rounded-xl">
                    <img
                      src={UserImage}
                      alt=""
                      className="w-3/5 mx-auto rounded-full p-3"
                    />
                    <div className="text-center mt-2">
                      <h3 className="text-lg font-bold">
                        {user.firstName ? user.firstName : "User"}
                      </h3>
                      <p className="text-sm">{user.email ? user.email : "-"}</p>
                      <p className="text-sm">
                        {user.location ? user.location : "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Profile Info */}
                <div className="w-full  md:w-1/2 md:mr-5 ">
                  <table className="table-auto w-full mx-auto mb-10  md:text-sm lg:text-md">
                    <tbody>
                      <tr className="bg-sky-50 h-14">
                        <td className="pl-4">First Name</td>
                        <td className="font-bold">
                          {user.firstName ? user.firstName : "-"}
                        </td>
                      </tr>
                      <tr className="h-14">
                        <td className="pl-4">Last Name</td>
                        <td className="font-bold">
                          {user.lastName ? user.lastName : "-"}
                        </td>
                      </tr>
                      <tr className="bg-sky-50 h-14">
                        <td className="pl-4">Role</td>
                        <td className="font-bold">
                          {user.role ? user.role : "-"}
                        </td>
                      </tr>
                      <tr className="h-14">
                        <td className="pl-4">Email</td>
                        <td className="font-bold">
                          {user.email ? user.email : "-"}
                        </td>
                      </tr>
                      <tr className="bg-sky-50 h-14">
                        <td className="pl-4">Phone</td>
                        <td className="font-bold">
                          {user.phone ? user.phone : "-"}
                        </td>
                      </tr>
                      <tr className="h-14">
                        <td className="pl-4">Location</td>
                        <td className="font-bold">
                          {user.location ? user.location : "-"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {tab === "Edit Profile" && (
              <div className="w-full  w-full md:mr-5 ">
                <table className="table-auto w-full mx-auto mb-10">
                  <tbody>
                    <tr className="bg-sky-50 h-14">
                      <td className="pl-4 ">First Name</td>
                      <td className="font-bold">
                        <input
                          type="text"
                          placeholder={user.firstName ? user.firstName : "-"}
                          className="h-8 rounded-xl px-3 border w-5/6"
                        />
                      </td>
                    </tr>
                    <tr className="h-14">
                      <td className="pl-4">Last Name</td>
                      <td className="font-bold">
                        <input
                          type="text"
                          placeholder={user.lastName ? user.lastName : "-"}
                          className="h-8 rounded-xl px-3 bg-sky-50 border w-5/6"
                        />
                      </td>
                    </tr>
                    <tr className="bg-sky-50 h-14">
                      <td className="pl-4">Role</td>
                      <td className="font-bold ">
                        <input
                          type="text"
                          placeholder={user.role ? user.role : "-"}
                          className="h-8 rounded-xl px-3 w-5/6 bg-sky-50 border"
                          disabled
                        />
                      </td>
                    </tr>
                    <tr className="h-14">
                      <td className="pl-4">Email</td>
                      <td className="font-bold ">
                        <input
                          type="text"
                          placeholder={user.email ? user.email : "-"}
                          className="h-8 rounded-xl px-3 w-5/6 bg-sky-50 border"
                        />
                      </td>
                    </tr>
                    <tr className="bg-sky-50 h-14">
                      <td className="pl-4">Phone</td>
                      <td className="font-bold">
                        <input
                          type="text"
                          placeholder={user.phone ? user.phone : "-"}
                          className="h-8 rounded-xl px-3 w-5/6 border"
                        />
                      </td>
                    </tr>
                    <tr className="h-14">
                      <td className="pl-4">Location</td>
                      <td className="font-bold">
                        <input
                          type="text"
                          placeholder={user.location ? user.location : "-"}
                          className="h-8 rounded-xl px-3 w-5/6 border"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className=" w-full flex justify-center text-sky-50">
                  <button className="w-3/4 sm:w-1/3 h-8 rounded-xl mb-5 bg-cyan-800 active:bg-cyan-900/75 ">
                    Save
                  </button>
                </div>
              </div>
            )}
            {tab === "Activity" && (
              <div className="w-full  w-full md:mr-5 ">
                <table className="table-auto w-full mx-auto mb-10">
                  <tbody>
                    <tr className="bg-sky-50 h-14 font-bold ">
                      <td className="pl-4 w-2/3">Survey Name</td>
                      <td className="pl-4 w-1/3">Date Taken</td>
                    </tr>
                    <tr className="h-14">
                      <td className="pl-4 w-2/3">Survey 2</td>
                      <td className="pl-4 w-1/3">2023-01-01</td>
                    </tr>
                    <tr className="bg-sky-50 h-14">
                      <td className="pl-4 w-2/3">Survey 3</td>
                      <td className="pl-4 w-1/3">2023-01-01</td>
                    </tr>
                    <tr className="h-14">
                      <td className="pl-4 w-2/3">Survey 4</td>
                      <td className="pl-4 w-1/3">2023-01-01</td>
                    </tr>
                    <tr className="bg-sky-50 h-14">
                      <td className="pl-4 w-2/3">Survey 5</td>
                      <td className="pl-4 w-1/3">2023-01-01</td>
                    </tr>
                    <tr className="h-14">
                      <td className="pl-4 w-2/3">Survey 6</td>
                      <td className="pl-4 w-1/3">2023-01-01</td>
                    </tr>
                  </tbody>
                </table>
                <div className="w-full flex flex-col items-center text-sm mb-5 hover:cursor-pointer">
                  <div>Show more</div>
                  <div>{ArrowDown}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {loading && (
        <div className="flex flex-col justify-center items-center mt-80">
          <img src={Spinner} alt="loading" className="w-8 mx-auto" />
          <h3 className="text-sm mt-4">Loading user profile</h3>
        </div>
      )}
    </div>
  );
}

export default UserCard;
