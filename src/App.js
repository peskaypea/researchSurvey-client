import "./App.css";

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "components/Contact";
import About from "components/About";
import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import Register from "pages/Register";
import Login from "pages/Login";
import Survey from "pages/Survey";
import ASLSurvey from "pages/ASLSurvey";
import AccessCode from "pages/AccessCode";
import SurveyEdit from "pages/SurveyEdit";
import UserProfile from "pages/UserProfile";
import Pricing from "../src/pages/Pricing";
import Nav from "components/Nav";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  console.log(darkTheme);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <Nav theme={darkTheme} toggleTheme={toggleTheme} />
      <Router>
        <Routes>
          <Route path="/" element={<Home theme={darkTheme} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/survey/asl" element={<ASLSurvey />} />
          <Route path="/survey/:id" element={<Survey />} />
          <Route path="/surveyedit/:id" element={<SurveyEdit />} />
          <Route path="/verify" element={<AccessCode />} />
          <Route path="/user/" element={<UserProfile />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
