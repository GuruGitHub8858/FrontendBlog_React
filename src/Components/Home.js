// Home.js
import React from 'react';
import './CSS/Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Empower Your Ideas</h1>
                    <p>Create and share your thoughts with the world using our intuitive blogging platform.</p>
                    <Link to="/login"><button className="cta-button">Get Started</button></Link>

                </div>
            </div>

            <div className="features-section">
                <div className="feature">
                    <h2>Easy to Use</h2>
                    <p>Effortlessly create and manage your blog with our intuitive drag-and-drop tools.</p>
                </div>
                <div className="feature">
                    <h2>Beautiful Templates</h2>
                    <p>Choose from a collection of professionally designed templates to make your blog stand out.</p>
                </div>
                <div className="feature">
                    <h2>Responsive Design</h2>
                    <p>Ensure your blog looks stunning on any device with our responsive design approach.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
