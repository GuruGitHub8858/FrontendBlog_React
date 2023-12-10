// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import external CSS file

const NavBar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <Link to='/' className="logo">
                    <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/blog-155-918862.png?f=webp&w=256" alt="Logo" />
                </Link>
                <p>Blog</p>
                <ul className="nav-links">
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    {/* Add more navigation links as needed */}
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
