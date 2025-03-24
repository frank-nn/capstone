import { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./SignupValidation";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    // password2: "",
  });
  const [errors, setErrors] = useState({});
  const handleInput = (event) =>
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign-Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              placehollder="Enter Name"
              name="name"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.name && <span className="text-danger"> {errors.name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placehollder="Enter Email"
              name="email"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.email && (
              <span className="text-danger"> {errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placehollder="Enter Password"
              name="password"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.password && (
              <span className="text-danger"> {errors.password}</span>
            )}
          </div>

          {/* <div className="mb-3">
            <label htmlFor="password2">Re-Enter Password</label>
            <input
              type="password"
              placehollder="Re Enter Password"
              className="form-control rounded-0"
            />
          </div> */}

          <button type="submit" className="btn btn-success w-100">
            Create Account{" "}
          </button>
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
