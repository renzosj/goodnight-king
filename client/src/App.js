import React, { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar"; // Make sure you have the correct path to Navbar
import Home from "./pages/Home"; // Import the Home component
import Dashboard from "./pages/dashboard";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <Router>
      {" "}
      {/* Wrap your content in Router */}
      <div className="App">
        <Navbar /> {/* Use the Navbar component */}
        <Switch>
          <Route path="/login">
            <Login onFormSwitch={toggleForm} />
          </Route>
          <Route path="/register">
            <Register onFormSwitch={toggleForm} />
          </Route>
          <Route path="/dashboard">
            <Dashboard onFormSwitch={toggleForm} />
          </Route>
          <Route path="">
            <Home /> {/* Define a Home component */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// const isAuthenticated = () => {
//   const token = localStorage.getItem('token');
//   if (!token) return false;

//   try {
//     const decodedToken = jwt.verify(token, 'your-secret-key');
//     return decodedToken.exp > Date.now() / 1000;
//   } catch (error) {
//     return false;
//   }
// };
