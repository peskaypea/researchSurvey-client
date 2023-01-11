import "./App.css";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuestionCard from "./components/QuestionCard";
import UserInfoForm from "./components/UserInfoForm";
import useFetch from "./useFetch";

function App() {
  const [start, setStart] = useState(false);
  const getStarted = () => {
    setStart(!start);
  };
  const [userData, setUserData] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("user")) || {
        userName: null,
        email: null,
        surveyTaken: [
          {
            surveyId: "6324d547c2e9d1cde20183d0",
            surveyName: "Basic Logo-syllabic Chinese Character",
            response: [],
          },
        ],
      }
    );
  });

  const collectUserReponse = (e, index, res) => {
    const newObj = userData;

    if (!res) {
      const newData = {
        [e.target.name]: [e.target.value],
        time: 0,
      };
      newObj.surveyTaken[0].response.push(newData);
    } else {
      newObj.surveyTaken[0].response[index] = res;
    }
    setUserData((user) => {
      return {
        ...user,
        ...newObj,
      };
    });
  };

  const collectTime = (index, time) => {
    const newObj = userData;

    const timeInSeconds = time / 1000;
    newObj.surveyTaken[0].response[index] = {
      ...newObj.surveyTaken[0].response[index],
      time: timeInSeconds,
    };

    setUserData((user) => {
      return {
        ...user,
        ...newObj,
      };
    });
  };
  // Change user object when input value changes
  const handleUserInfoChange = (e) => {
    const newData = {
      [e.target.name]: e.target.value,
    };

    setUserData((user) => {
      const newUser = {
        ...user,
        ...newData,
      };

      localStorage.setItem("user", JSON.stringify(newUser));
      return newUser;
    });
  };

  const { data, loading } = useFetch(
    "http://localhost:5000/surveys/63bf0c80a6ffb6b3bbb278bb"
  );

  const submitUserAnswers = () => {
    fetch("http://localhost:5000/submit/userresponse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then(() => {
        console.log("success");
        localStorage.clear();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-container">
      <Nav />

      {loading ? (
        <h1>Loading</h1>
      ) : (
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Welcome start={start} getStarted={getStarted} />}
            />
            <Route
              path="/getstarted"
              element={
                <UserInfoForm
                  user={userData}
                  setUser={handleUserInfoChange}
                  // getInfo={collectUserReponse}
                />
              }
            />
            <Route
              path="/survey"
              element={
                <QuestionCard
                  user={userData}
                  survey={data}
                  submit={submitUserAnswers}
                  getInfo={collectUserReponse}
                  getTime={collectTime}
                />
              }
            />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
