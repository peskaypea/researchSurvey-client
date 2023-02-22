import UserCard from "components/UserCard";
import React from "react";
import useFetch from "utility/useFetch";
import DashNav from "../components/DashNav";
function UserProfile({ theme }) {
  const token = localStorage.getItem("token");
  const baseURL_development = "http://localhost:5000";

  const {
    data = { _id: "" },
    loading,
    error,
  } = useFetch(`${baseURL_development}/user/userprofile`, token);

  return (
    <div className="">
      <div className=" h-screen dark:bg-slate-800">
        <DashNav />
        <UserCard user={data} loading={loading} theme={theme}></UserCard>
      </div>
    </div>
  );
}

export default UserProfile;
