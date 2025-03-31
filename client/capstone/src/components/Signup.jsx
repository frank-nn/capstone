import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "../Validations/SignupValidation";
import axios from "axios";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false); // Added for password visibility toggle
  const navigate = useNavigate();

  // Handle input changes
  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate on change
    const validationErrors = Validation({
      ...values,
      [name]: value,
    });
    setErrors(validationErrors);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate on form submit
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (
      !validationErrors.name &&
      !validationErrors.email &&
      !validationErrors.password
    ) {
      setLoading(true);
      setApiError(null); // Reset any previous error

      // Make the API request to the backend
      axios
        .post("http://localhost:8080/api/auth/signup", values) // Fixed endpoint to lowercase 'signup'
        .then((res) => {
          // Successful signup
          navigate("/"); // Redirect to home or login page
          alert("Sign-up successful!");
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
          // Set the error message based on API response
          setApiError(
            err.response?.data?.message ||
              "An error occurred during sign-up. Please try again."
          );
        });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign-Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <div className="input-group">
              <input
                type={passwordVisible ? "text" : "password"} // Toggle password visibility
                placeholder="Enter Password"
                name="password"
                onChange={handleInput}
                className="form-control rounded-0"
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-success w-100"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          {apiError && <div className="text-danger">{apiError}</div>}

          <p></p>
          <Link
            to="/"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Return To Login
          </Link>
          <p></p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
