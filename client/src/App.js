import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard";
import Chat from "./pages/chat";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
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
  // Replace with your actual user data
  const user = {
    first_name: "John", // Example first name
    // Other user properties...
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/chat" element={<Chat />} /> {/* Add the Chat route */}
          </Routes>
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
