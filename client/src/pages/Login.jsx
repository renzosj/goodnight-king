import React, { useState } from "react";
import { LOGIN_USER } from '../utils/mutations'
import { useMutation } from '@apollo/client';


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [login] = useMutation(LOGIN_USER);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        try {
            const { data } = await login({
              variables: { ...formState },
            });
      
            Auth.login(data.login.token);
          } catch (e) {
            console.error(e);
          }
      
          // clear form values
          setFormState({
            email: '',
            password: '',
          });

        };
      

    return (
        <div className="login-container"> {/* Apply the styling class */}
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="email">E-mail</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                </div>
                <button className="login-button">Login</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')} className="switch-button">Don't have an account? Register here.</button>
        </div>
    );
};

export default Login;








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