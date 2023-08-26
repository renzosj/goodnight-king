import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
//import { LOGIN_USER } from "../utils/mutations";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [formData, setFormData] = useState({ email: "", password: "" });

  const [login, { error }] = useMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    // ... your authentication logic ...
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="login-container">
      {" "}
      {/* Apply the styling class */}
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">E-mail</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
        </div>
        <button className="login-button">Login</button>
      </form>
      <button
        onClick={() => props.onFormSwitch("register")}
        className="switch-button"
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};

export default Login;

// try {
//     // Make an API request to your authentication endpoint
//     const response = await fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, pass }),
//     });

//     if (response.ok) {
//       const { token } = await response.json();

//       // Store the token in local storage or a state management solution
//       localStorage.setItem('token', token);
//     }
//   } catch (error) {
//     console.error('Login failed:', error);
//   }
