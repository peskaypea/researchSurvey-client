import React from "react";
import DashNav from "../components/DashNav";
import SurveysList from "../components/DashSurveyList";

function Dashboard() {
  return (
    <div>
      <DashNav />
      <SurveysList />
    </div>
  );
}

export default Dashboard;
