import React, { useState } from "react";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="register-container"> {/* Use a div to contain the section */}
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="name">Full Name</label>
                    <input value={name} name="name" id="name" placeholder="full name" />
                </div>
                <div className="input-container">
                    <label htmlFor="email">E-mail</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                </div>
                <button className="register-button">Register</button>
            </form>
            <button onClick={() =>props.onFormSwitch('login')} className="switch-button">Already have an account? Login here.</button>
        </div>
    )
}
