import "./App.css";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import React, { useState, useEffect } from "react";
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
        userName: "",
        email: "",
        surveyTaken: [
          {
            surveyId: "6324d547c2e9d1cde20183d0",
            surveyName: "Basic Logo-syllabic Chinese Character",
            response: [],
            time: [],
          },
        ],
      }
    );
  });

  //Change user object when input value changes
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

  const handleMCQuestionReponse = (e) => {
    const newObj = userData;
    const newData = e.target.value;

    newObj.surveyTaken[0].response.push(newData);
    setUserData((user) => {
      return {
        ...user,
        ...newObj,
      };
    });
    console.log(newData);
  };

  const handleTimeCollection = (time) => {
    const newObj = userData;
    const timeTaken = time / 1000;
    newObj.surveyTaken[0].time.push(timeTaken);
    setUserData((user) => {
      return {
        ...user,
        ...newObj,
      };
    });
  };

  const handleShortAnswerResponse = (res) => {
    const responses = Object.entries(res);
    const userAnswers = responses.map((response) => {
      return response.join(" : ");
    });
    const newObj = userData;
    newObj.surveyTaken[0].response.push(userAnswers.toString());

    setUserData((user) => {
      return {
        ...user,
        ...newObj,
      };
    });
  };

  const { data, loading } = useFetch(
    "http://localhost:5000/surveys/6324d547c2e9d1cde20183d0"
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

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div>
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
                <UserInfoForm user={userData} setUser={handleUserInfoChange} />
              }
            />
            <Route
              path="/survey"
              element={
                <QuestionCard
                  user={userData}
                  survey={data}
                  getMCResponse={handleMCQuestionReponse}
                  getReponseTime={handleTimeCollection}
                  getShortAnswerResponse={handleShortAnswerResponse}
                  submit={submitUserAnswers}
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
