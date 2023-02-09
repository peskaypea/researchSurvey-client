import UserCard from "components/UserCard";
import React from "react";
import useFetch from "utility/useFetch";
import DashNav from "../components/DashNav";
function UserProfile() {
  const token = localStorage.getItem("token");
  const baseURL_development = "http://localhost:5000";

  const {
    data = { _id: "" },
    loading,
    error,
  } = useFetch(`${baseURL_development}/user/userprofile`, token);

  return (
    <div className="bg-slate-100 h-screen">
      <div className="bg-cyan-800 h-80">
        <DashNav></DashNav>
        <UserCard user={data} loading={loading}></UserCard>
      </div>
    </div>
  );
}

export default UserProfile;
