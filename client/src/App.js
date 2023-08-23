// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
      const decodedToken = jwt.verify(token, 'your-secret-key');
      return decodedToken.exp > Date.now() / 1000;
    } catch (error) {
      return false;
    }
  };

  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route
        path="/dashboard"
        render={() =>
          isAuthenticated() ? <Dashboard /> : <Redirect to="/login" />
        }
      />
    </Router>
  );
};

export default App;
