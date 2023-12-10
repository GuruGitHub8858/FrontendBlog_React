// Footer.js

import React from 'react';
import { Twitter, Facebook, LinkedIn } from '@mui/icons-material';
import './CSS/Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p>
                        <strong>Phone:</strong> +1 (123) 456-7890
                    </p>
                    <p>
                        <strong>Email:</strong> info@example.com
                    </p>
                </div>
                <div className="social-links">
                    <h3>Connect With Us</h3>
                    <ul>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Twitter />

                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Facebook />

                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <LinkedIn />

                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2023 YM blog</p>
            </div>
        </footer>
    );
};

export default Footer;
