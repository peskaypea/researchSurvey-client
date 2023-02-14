import React from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "components/QuestionCard";
import useFetch from "../utility/useFetch";
import LoadingSpinner from "../assets/loading-gif.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const home = <FontAwesomeIcon icon={faHome} />;
const id = window.location.href.split("/").pop();
const token = localStorage.getItem("token");

function Survey({ theme }) {
  const navigate = useNavigate();
  const baseURL_development = "http://localhost:5000";

  const {
    data = { errorMessage: "", _id: "", surveyName: "" },
    loading = true,
    error = false,
  } = useFetch(`${baseURL_development}/survey/${id}`, token);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-screen bg-cyan-900">
        <img src={LoadingSpinner} alt="loading" className="w-8" />
      </div>
    );
  } else if (data.errorMessage === "verifyAccess") {
    navigate("/verify", {
      state: { id: `${id}`, surveyName: data.surveyName },
    });
  } else if (error) {
    return (
      <div className="w-full flex flex-col justify-center items-center h-screen bg-cyan-900 text-sky-100">
        <h1 className="text-3xl">404</h1>
        <h3 className="mb-5">Unable to retrieve data</h3>
        <a href="/" className="text-sky-100">
          {home}
        </a>
      </div>
    );
  } else if (data._id) {
    return (
      <div>
        <QuestionCard survey={data} />
      </div>
    );
  }
}

export default Survey;
