import { useState } from "react";
import reactLogo from "./assets/icons8-logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/Signup.jsx";

function App() {
  return (
    <>
      <div>
        <a></a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="title">FRANKBOOK</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/Signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
