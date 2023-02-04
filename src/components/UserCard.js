import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPlay,
  faUserEdit,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";
import UserImage from "../assets/john-profilepic.jpg";
const User = (
  <FontAwesomeIcon
    icon={faUser}
    style={{ paddingRight: "5px" }}
  ></FontAwesomeIcon>
);
const Arrow = <FontAwesomeIcon icon={faPlay} size={"xs"}></FontAwesomeIcon>;
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

function UserCard() {
  const [tab, setTab] = useState("Profile");

  const changeTab = (e) => {
    if (e.target.value) {
      setTab(e.target.value);
    }
  };
  return (
    <div className="w-11/12 sm:w-5/6 lg:w-1/2 mx-auto">
      <div className="mb-10">
        <h1 className="text-sky-50 text-2xl">{User} My Profile</h1>
        <h6 className="text-sky-50 flex gap-2 text-sm">
          <a href="/dashboard">Survey Connect</a>
          <span>{Arrow} </span>
          <span>My Profile</span>
        </h6>
      </div>
      <div className="flex flex-col bg-white rounded-3xl ">
        {/* UserDash Nav */}
        <div className="flex rounded-t-3xl border-b border-neutral-200">
          <ul className="ml-4 flex justify-between  w-1/3 h-20 items-center text-slate-700 ">
            <button
              className={
                tab === "Profile"
                  ? "border-b-2 border-cyan-900 h-full flex items-center hover:cursor-pointer"
                  : "h-full flex items-center hover:cursor-pointer"
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
                  ? "border-b-2 border-cyan-900 h-full flex items-center hover:cursor-pointer"
                  : "h-full flex items-center hover:cursor-pointer"
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
          </ul>
        </div>
        {/*User Card Main Content */}
        <div className="flex justify-center items-start mt-10">
          <div className="w-1/2 mx-5">
            <div className=" bg-sky-50 rounded-xl">
              <img
                src={UserImage}
                alt=""
                className="w-3/5 mx-auto rounded-full p-3"
              />
              <div className="text-center mt-2">
                <h3 className="text-lg font-bold">Malcolm</h3>
                <p className="text-sm">malcolmlockyer45@gmail.com</p>
                <p className="text-sm">Canada</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 mr-5">
            <table className="table-auto w-full mx-auto mb-10">
              <tbody>
                <tr className="bg-sky-50 h-14">
                  <td className="pl-4">First Name</td>
                  <td className="font-bold">Malcolm </td>
                </tr>
                <tr className="h-14">
                  <td className="pl-4">Last Name</td>
                  <td className="font-bold">Lockyer</td>
                </tr>
                <tr className="bg-sky-50 h-14">
                  <td className="pl-4">Role</td>
                  <td className="font-bold">User</td>
                </tr>
                <tr className="h-14">
                  <td className="pl-4">Email</td>
                  <td className="font-bold">malcolmlockyer45@gmail.com</td>
                </tr>
                <tr className="bg-sky-50 h-14">
                  <td className="pl-4">Phone</td>
                  <td className="font-bold">{"(416) 845-9874"}</td>
                </tr>
                <tr className="h-14">
                  <td className="pl-4">Location</td>
                  <td className="font-bold">ON, Canada</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
