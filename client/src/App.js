import React, {useState} from "react";
import './App.css';
import {Login } from "../src/pages/Login";
import {Register} from "../src/pages/Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
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
  
  return (
    <div className="App">
   {
    currentForm === "login"  ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} />
   }
   </div>

  );
}

export default App;
