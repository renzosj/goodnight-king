import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../utils/mutations";

import Auth from "../utils/auth";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [firstName, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    try {
      const { data } = await signUp({
        variables: {
          email: email,
          password: pass,
          firstName: firstName,
        },
      });
      Auth.login(data.signUp.token);
    } catch (err) {
      console.error(err);
    }
  };

  const [signUp, { error }] = useMutation(SIGN_UP);

  return (
    <div className="register-container">
      {" "}
      {/* Use a div to contain the section */}
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="firstName">First Name</label>
          <input
            value={firstName}
            onChange={(e) => setName(e.target.value)}
            name="firstName"
            id="name"
            placeholder="First Name"
          />
        </div>
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
        <button className="register-button">Register</button>
      </form>
      <button type="submit" className="switch-button">
        Already have an account? Login here.
      </button>
    </div>
  );
};

export default Register;
