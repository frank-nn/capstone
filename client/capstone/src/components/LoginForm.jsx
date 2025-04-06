import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "../Validations/LoginValidation";
import axios from "axios";

function LoginForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Handle input changes
  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value, // Directly set value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form before making API call
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    // If no errors, proceed to make the API request
    if (!validationErrors.email && !validationErrors.password) {
      axios
        .post("http://localhost:8080/api/auth/login", values)
        .then((res) => {
          console.log(res.data);

          if (res.data === "Success") {
            navigate("/"); // Correct the path to "home" or whatever your home route is
          }
        })
        .catch((err) => {
          if (err.response && err.response.status === 401) {
            alert("Email or Password Incorrect");
          } else {
            console.error(err);
            alert("Email or Password Incorrect.");
          }
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
              placeholder="Enter Email"
              name="email"
              value={values.email}
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
              placeholder="Enter Password"
              name="password"
              value={values.password}
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
