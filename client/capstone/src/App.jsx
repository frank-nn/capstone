import { useState } from "react";
import reactLogo from "./assets/icons8-logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/Signup.jsx";
import Home from "./components/home.jsx"; // Corrected the import name
import Profile from "./pages/profile/Profile.jsx";

function App() {
  return (
    <>
      <div className="header">
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="icon" alt="React logo" />
        </a>
        <h1 className="title">FRANKBOOK</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route exact path="/" element={<Home />} />{" "}
          {/* Fixed the route path */}
          <Route path="/Profile/:username" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
