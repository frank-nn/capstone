import { useState } from "react";
import reactLogo from "./assets/icons8-logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/Signup.jsx";
import Home from "./components/home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import ComingSoon from "./pages/ComingSoon.jsx"; // ✅ Import the ComingSoon page
import ProtectedRoute from "./components/ProtectedRoute.jsx";

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
          {/* Public routes */}
          <Route path="/" element={<LoginForm />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/comingsoon" element={<ComingSoon />} />{" "}
          {/* ✅ New route */}
          {/* Protected routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
