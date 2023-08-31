import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../utils/mutations";

import Auth from "../utils/auth";

export const Register = () => {
  const [formState, setFormState] = useState({
    userName: "",
    firstName: "",
    email: "",
    password: "",
  });

  const [signUp, { error, data }] = useMutation(SIGN_UP);

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
      const { data } = await signUp({
        variables: { ...formState },
      });
      console.log(data.signUp.token);
      Auth.login(data.signUp.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="register-container">
      {data ? (
        <p>
          Success! You may now head <Link to="/login">login page</Link>
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="userName">
            Username
            <input
              className="form-input"
              placeholder="Your Username"
              name="userName"
              type="text"
              value={formState.userName}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="firstName">
            First Name
            <input
              className="form-input"
              placeholder="First Name"
              name="firstName"
              type="text"
              value={formState.firstName}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            E-mail
            <input
              className="form-input"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      )}
      {error && <div>{error.message}</div>}

      <button className="switch-button">
        Already have an account? <Link to="/login">Login here.</Link>
      </button>
    </div>
  );
};

export default Register;
