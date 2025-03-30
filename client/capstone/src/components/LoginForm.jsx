import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";

function LoginForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value, // Directly set value, no need for array
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Set errors from validation
    setErrors(Validation(values));

    // Check if no errors exist
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8080/login", values)
        .then((res) => {
          if (res.data === "Success") {
            navigate("home"); // Navigate to the home page on success
          } else {
            alert("No record existed");
          }
        })
        .catch((err) => {
          console.error(err); // Log the error if the request fails
        });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign-In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email" // Fixed typo here
              name="email"
              value={values.email} // Binding value to state
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password" // Fixed typo here
              name="password"
              value={values.password} // Binding value to state
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>

          <button type="submit" className="btn btn-success w-100">
            Login
          </button>

          <p></p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
