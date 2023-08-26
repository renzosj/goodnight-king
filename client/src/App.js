import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Login } from "../src/pages/Login";
import { Register } from "../src/pages/Register";
import Navbar from "./pages/Navbar"; // Make sure you have the correct path to Navbar
import Home from "./pages/Home"; // Import the Home component
import Dashboard from "./pages/dashboard";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const [setCurrentForm] = useState('login');

const toggleForm = (formName) => {
  setCurrentForm(formName);
}


function App() {

    return (
      <ApolloProvider client={client}>
        <Router> {/* Wrap your content in Router */}
            <div className="App">
                <Navbar /> {/* Use the Navbar component */}
                <Switch>
                    <Route path="/login">
                        <Login onFormSwitch={toggleForm} />
                    </Route>
                    <Route path="/register">
                        <Register onFormSwitch={toggleForm} />
                    </Route>
                    <Route path="/dasboard">
                        <Dashboard onFormSwitch={toggleForm} />
                    </Route>
                    <Route path="">
                        <Home /> {/* Define a Home component */}
                    </Route>
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
  