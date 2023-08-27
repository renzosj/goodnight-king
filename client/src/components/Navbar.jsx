import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/login" className="navbar-link">
                        Login
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/register" className="navbar-link">
                        Register
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/dashboard" className="navbar-link">
                        Dashboard
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
