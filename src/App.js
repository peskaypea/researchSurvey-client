import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import Register from "pages/Register";
import Login from "pages/Login";
import Survey from "pages/Survey";
import ASLSurvey from "pages/ASLSurvey";
import AccessCode from "pages/AccessCode";
import SurveyEdit from "pages/SurveyEdit";
import UserProfile from "pages/UserProfile";
import SurveyResponse from "pages/SurveyResponse";

function App() {
  //Set theme to light by default if user hasn't set theme
  const theme = JSON.parse(localStorage.getItem("darkTheme")) ?? false;
  const [darkTheme, setDarkTheme] = useState(theme);
  const [active, setActive] = useState(true);

  const handleChangeActive = () => {
    setActive((previousIcon) => {
      return !previousIcon;
    });
  };

  const [toggle, setToggle] = useState(true);
  //Toggle b/w dark/light
  const toggleTheme = () => {
    setDarkTheme((oldTheme) => {
      //Save user theme preference
      localStorage.setItem("darkTheme", JSON.stringify(!oldTheme));
      return !oldTheme;
    });
  };

  const [tab, setTab] = useState("Welcome");
  //Change tab
  const navigateTab = (e) => {
    setTab(e.target.value);
  };
  return (
    <div className={darkTheme ? "dark" : ""}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                theme={darkTheme}
                tab={tab}
                toggleTheme={toggleTheme}
                navigateTab={navigateTab}
                darkTheme={darkTheme}
                active={active}
                handleChangeActive={handleChangeActive}
                toggle={toggle}
                setToggle={setToggle}
              />
            }
          />
          <Route path="/register" element={<Register theme={darkTheme} />} />
          <Route path="/login" element={<Login theme={darkTheme} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/survey/asl" element={<ASLSurvey />} />
          <Route path="/survey/:id" element={<Survey />} />
          <Route path="/surveyedit/:id" element={<SurveyEdit />} />
          <Route path="/verify" element={<AccessCode />} />
          <Route path="/user/" element={<UserProfile />} />
          <Route path="/responses" element={<SurveyResponse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
