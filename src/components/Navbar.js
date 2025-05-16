import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-container">
                <ul className="nav-list">
                    <li><Link to="/" className="nav-item">Home</Link></li>
                    <li><Link to="/about" className="nav-item">About</Link></li>
                    <li><Link to="/projects" className="nav-item">Projects</Link></li>
                    <li><Link to="/contact" className="nav-item">Contact</Link></li>
                    <li><Link to="/footer" className="nav-item">page</Link></li>
                    
                </ul>
                </div>
                </nav>
                
        
    );
};

export default Navbar;