// import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign-Up</h2>
        <form action="">
          <div className="mb-3">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              placehollder="Enter Name"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placehollder="Enter Email"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placehollder="Enter Password"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password2">Re-Enter Password</label>
            <input
              type="password"
              placehollder="Re Enter Password"
              className="form-control rounded-0"
            />
          </div>
          <button className="btn btn-success w-100">Create Account </button>
          <p></p>
          <Link
            to="/"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Return To Login{" "}
          </Link>
          <p> </p>
        </form>
      </div>
    </div>
  );
}
export default Signup;
