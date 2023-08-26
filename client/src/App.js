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

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Navbar /> {/* Use the Navbar component */}
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
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
