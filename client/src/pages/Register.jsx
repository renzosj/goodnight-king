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
      Auth.login(data.signUp.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="register-container">
      {data ? (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="userName">Username</label>
          <input
            className="form-input"
            placeholder="Your Username"
            name="userName"
            type="text"
            value={formState.userName}
            onChange={handleChange}
          />
          <label htmlFor="firstName">First Name</label>
          <input
            className="form-input"
            placeholder="First Name"
            name="firstName"
            type="text"
            value={formState.firstName}
            onChange={handleChange}
          />
          <label htmlFor="email">E-mail</label>
          <input
            className="form-input"
            placeholder="Your email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            className="form-input"
            placeholder="******"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          />
          <button className="register-button">Register</button>
        </form>
      )}
      {error && <div>{error.message}</div>}

      <button type="submit" className="switch-button">
        Already have an account? Login here.
      </button>
    </div>
  );
};

export default Register;
