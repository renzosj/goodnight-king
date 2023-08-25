import React, { useState } from "react";
// import jwt from 'jsonwebtoken';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
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
        };
      

    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email"> email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password"> password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button>Login</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')}> Dont have an account? Register here.</button>
        </>
    );
};

export default Login;

