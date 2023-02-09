import React, { useState, useEffect } from "react";
import DashNav from "../components/DashNav";
import SurveyEditForm from "../components/SurveyEditForm";
import SurveyEditNav from "components/SurveyEditNav";
import SurveyOverView from "components/SurveyOverView";
function SurveyEdit() {
  const id = window.location.href.split("/").pop();
  const baseURL_development = "http://localhost:5000";
  const token = localStorage.getItem("token");
  // const { data, loading, error } = useFetch(
  //   `${baseURL_development}/survey/${id}`,
  //   token
  // );
  const [data, setData] = useState({});
  console.log(data);
  const requestHeaders = {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
    type: "edit",
  };
  useEffect(() => {
    fetch(`${baseURL_development}/survey/${id}`, {
      method: "GET",
      headers: requestHeaders,
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const changeTab = (e) => {
    setTab(e.target.value);
  };
  const [tab, setTab] = useState("Over View");
  return (
    <div className="bg-white h-screen">
      <DashNav></DashNav>
      <SurveyEditNav tab={tab} changeTab={changeTab} />
      {/* Over View Tab */}
      {tab === "Over View" && <SurveyOverView survey={data} />}
      {tab === "Survey Info" && <SurveyEditForm survey={data}></SurveyEditForm>}
    </div>
  );
}

export default SurveyEdit;