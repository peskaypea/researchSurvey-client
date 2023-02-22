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

const User = <FontAwesomeIcon icon={faUser} style={{ paddingRight: "5px" }} />;
const Arrow = <FontAwesomeIcon icon={faPlay} size={"xs"} />;
const ArrowDown = <FontAwesomeIcon icon={faArrowDown} size={"xs"} />;
const UserEdit = (
  <FontAwesomeIcon icon={faUserEdit} style={{ paddingRight: "5px" }} />
);
const Activity = (
  <FontAwesomeIcon icon={faNetworkWired} style={{ paddingRight: "5px" }} />
);

function UserCard({ user, loading, theme }) {
  const [tab, setTab] = useState("Profile");

  const changeTab = (e) => {
    if (e.target.value) {
      setTab(e.target.value);
    }
  };
  return (
    <div className="  dark:bg-slate-800 ">
      {!loading && (
        <div className="w-11/12 sm:w-5/6 lg:w-3/5 2xl:w-1/2 mx-auto">
          <div className="mt-5 mb-10">
            <h1 className="text-black dark:text-sky-50 text-2xl">
              {User}{" "}
              {user.firstName
                ? `${user.firstName} ${user.lastName}`
                : "User Profile"}
            </h1>
            <h6 className="text-black dark:text-sky-50 flex gap-2 text-sm">
              <a href="/dashboard">Survey Connect</a>
              <span>{Arrow} </span>
              <span>{tab}</span>
            </h6>
          </div>
          <div className="flex flex-col bg-slate-200 rounded-3xl">
            {/* UserDash Nav */}
            <div className="flex rounded-t-3xl border-b border-neutral-200">
              <div className="ml-5 flex justify-around  md:justify-start w-full sm:w-3/5 md:1/3 h-20 items-center text-slate-700 ">
                <button
                  className={
                    tab === "Profile"
                      ? "border-b-2 border-green-500 dark:border-sky-500 h-full flex items-center hover:cursor-pointer "
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
                    tab === "Activity"
                      ? "border-b-2 border-green-500 dark:border-sky-500 h-full flex items-center hover:cursor-pointer ml-8"
                      : "h-full flex items-center hover:cursor-pointer ml-8"
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
              <form>
                <div className="p-3">
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="floating_first_name"
                        id="floating_first_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-600 dark:border-gray-600 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="floating_first_name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 dark:peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        {user.firstName ? user.firstName : "First Name"}
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="floating_last_name"
                        id="floating_last_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-600 dark:border-gray-600 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="floating_last_name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 dark:peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        {user.lastName ? user.lastName : "Last Name"}
                      </label>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        name="floating_phone"
                        id="floating_phone"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-600 dark:border-gray-600 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="floating_phone"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 dark:peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        {user.phone ? user.phone : "Phone Number"}
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="floating_role"
                        id="floating_role"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-600 dark:border-gray-600 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" "
                        readOnly
                      />
                      <label
                        htmlFor="floating_role"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 dark:peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        {user.role ? `Role: ${user.role}` : "-"}
                      </label>
                    </div>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-600 dark:border-gray-600 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 dark:peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      {user.email ? user.email : "Email address"}
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="password"
                      name="floating_password"
                      id="floating_password"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-600 dark:border-gray-600 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_password"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 dark:peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="password"
                      name="repeat_password"
                      id="floating_repeat_password"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-600 dark:border-gray-600 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_repeat_password"
                      className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 dark:peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Confirm password
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}

            {tab === "Activity" && (
              <div className="w-full   md:mr-5 ">
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
