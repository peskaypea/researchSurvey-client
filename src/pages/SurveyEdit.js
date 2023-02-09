import React from "react";
import DashNav from "../components/DashNav";
import SurveyEditForm from "../components/SurveyEditForm";
import useFetch from "../utility/useFetch";
function SurveyEdit() {
  const baseURL_development = "http://localhost:5000";
  const token = localStorage.getItem("token");
  const { data, loading, error } = useFetch(
    `${baseURL_development}/survey/63dee562a8f49b458617223a`,
    token
  );

  return (
    <div className="bg-white h-screen">
      <DashNav></DashNav>
      {!loading && <SurveyEditForm survey={data}></SurveyEditForm>}
    </div>
  );
}

export default SurveyEdit;
