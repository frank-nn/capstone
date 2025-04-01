function Validation(values) {
  let error = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

  if (values.name === "") {
    error.name = "Name should not be empty.";
  } else {
    error.name = "";
  }

  // Email Validation
  if (!values.email) {
    error.email = "Email should not be empty.";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Invalid email format.";
  } else {
    error.email = "";
  }

  // Password Validation
  if (!values.password) {
    error.password = "Password should not be empty.";
  } else if (!password_pattern.test(values.password)) {
    error.password =
      "Password must be 8 characters long, contain at least one uppercase, one lowercase, one number, and one special character.";
  } else {
    error.password = "";
  }

  return error;
}

export default Validation;
