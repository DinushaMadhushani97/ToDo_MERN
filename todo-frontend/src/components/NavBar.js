import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Style.css'; 

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">Your App Name</Link>
                <ul className="navbar-menu">
                    <li>
                        <Link to="/" className="navbar-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/todos" className="navbar-link">Todo List</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
