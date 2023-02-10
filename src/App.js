import "./App.css";
import React from "react";
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
import SurveyResponse from "pages/SurveyResponse";
import Pricing from "../src/pages/Pricing";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path="/responses" element={<SurveyResponse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
