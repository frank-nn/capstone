import { useState } from "react";

function LoginForm() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form action="">
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" placehollder="Enter Email" />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Password</label>
            <input type="email" placehollder="Enter Password" />
          </div>
          <button className="btn btn-sucess">Log in </button>
          <p></p>
          <button className="btn btn-default border">Create Account </button>
        </form>
      </div>
    </div>
  );
}
//   const [userEmail, setUserEmail] = useState("");
//   const [userPassword, setUserPassword] = useState("");
//   const [submitResult, setSubmitResult] = useState("");
//   const [attempts, setAttempts] = useState(0);
//   const [isLocked, setIsLocked] = useState(false);
//   const maxAttempts = 3;
//   const lockoutTime = 30 * 1000; // 30 seconds lockout

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload

//     if (isLocked) {
//       setSubmitResult(
//         "Too many failed attempts. Please wait before trying again."
//       );
//       return;
//     }

//     const trimmedPassword = userPassword.trim();
//     const trimmedEmail = userEmail.trim();

//     if (trimmedPassword.length < 8) {
//       setSubmitResult("Password must be at least 8 characters long.");
//     } else if (
//       trimmedPassword.toLowerCase().includes(trimmedEmail.toLowerCase())
//     ) {
//       setSubmitResult("Password must not contain your email address.");
//     } else if (
//       !/[A-Z]/.test(trimmedPassword) ||
//       !/[0-9]/.test(trimmedPassword)
//     ) {
//       setSubmitResult(
//         "Password must include at least one uppercase letter and one number."
//       );
//     } else {
//       setSubmitResult("Successful login.");
//       setAttempts(0); // Reset attempts on success
//       return;
//     }

//     // Increase attempt count on failure
//     setAttempts((prev) => prev + 1);

//     // If max attempts reached, lock the user out
//     if (attempts + 1 >= maxAttempts) {
//       setIsLocked(true);
//       setSubmitResult("Too many failed attempts. Try again in 30 seconds.");
//       setTimeout(() => {
//         setIsLocked(false);
//         setAttempts(0);
//         setSubmitResult("");
//       }, lockoutTime);
//     }
//   };

//   return (
//     <div className="LoginForm componentBox">
//       <form onSubmit={handleSubmit}>
//         <div className="formRow">
//           <label>
//             Email Address:
//             {/* Controlled form element needs both value and onChange.
//            onChange handler uses event param e to access target value.
//            Whenever user types, new value is stored in state. */}
//             <input
//               type="email"
//               value={userEmail}
//               name="userEmail"
//               onChange={(e) => setUserEmail(e.target.value)}
//             />
//           </label>
//         </div>
//         <div className="formRow">
//           <label>
//             Password:
//             <input
//               type="password"
//               value={userPassword}
//               name="password"
//               onChange={(e) => setUserPassword(e.target.value)}
//             />
//           </label>
//         </div>
//         <button>Log In</button>
//         <p>{submitResult}</p>
//       </form>
//     </div>
//   );
// }
// // try removing the onChange prop and typing in a field
export default LoginForm;
