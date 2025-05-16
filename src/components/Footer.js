// Footer.js
import React from 'react';
import './footer.css'; // Make sure to create this CSS file
import { FaLinkedin, FaGithub, } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <ul className="social-links">
                        <a href="https://github.com/arunhari3720" target="_blank" rel="noopener noreferrer">
                                                    <FaGithub size={30} color='white' /></a>
                         <a href="https://www.linkedin.com/in/arun-hariharan-2226b5211/" target="_blank" rel="noopener noreferrer">
                                                    <FaLinkedin size={30} color='white' />
                                                </a>
                        <li><a href="https://portfolio.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-react"></i></a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 arunhari3720. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;