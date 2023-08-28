import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

export const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [logIn, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);
    try {
      const { data } = await logIn({
        variables: { ...formState },
      });
      Auth.login(data.logIn.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-container">
        {data ? (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            value={formState.password}
            onChange={handleChange}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
        </div>
        <button className="login-button">Login</button>
      </form>
      )}
      <button
        // onClick={() => props.onFormSwitch("register")}
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
