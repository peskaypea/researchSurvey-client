import UserCard from "components/UserCard";
import React from "react";
import DashNav from "../components/DashNav";
function UserProfile() {
  return (
    <div className="bg-sky-100 h-screen">
      <div className="bg-cyan-800 h-80">
        <DashNav></DashNav>
        <UserCard></UserCard>
      </div>
    </div>
  );
}

export default UserProfile;
