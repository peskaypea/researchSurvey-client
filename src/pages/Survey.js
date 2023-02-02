import React, { useEffect } from "react";

import QuestionCard from "components/QuestionCard";
import useFetch from "../utility/useFetch";
const id = window.location.href.split("/").pop();
const token = localStorage.getItem("token");
function Survey() {
  const { data, loading, error } = useFetch(
    `http://localhost:5000/survey/${id}`,
    token
  );

  if (!loading) {
    return (
      <div>
        <QuestionCard survey={data} error={error} loading={loading} />
      </div>
    );
  }
}

export default Survey;
