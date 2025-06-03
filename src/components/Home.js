import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './home.css';


const Home = () => {
    const text = "Arun Hari Haran";
    const [letters, setLetters] = useState([]);

    useEffect(() => {
        setLetters(text.split(''));
    }, [text]);

    return (
        <div className="home">
            <h1>
                {letters.map((letter, index) => (
                    <span 
                        key={index} 
                        className="letter" 
                        style={{ animationDelay: `${index * 0.1}s` }} // Delay for staggered effect
                    >
                        {letter}
                    </span>
                ))}
            </h1>
            <p className="fade-in">Freelance developer creating digital magic — one line of code at a time.</p>

            <div className="social-media">
                <h3>Connect with me:</h3>
                <br></br>
                <br></br>
                <ul className="social-icons">
                    <li>
                        <a 
                            href="https://www.linkedin.com/in/arun-hariharan-2226b5211/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                        >
                            <FaLinkedin size={30} color='white' />
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://github.com/arunhari3720" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                        >
                            <FaGithub size={30} color='white' />
                        </a>
                    </li>
                </ul>
            </div>
            <br></br>
            <br></br>
            <p>Click to get my resume</p>
            <br></br>
            <br></br>
            <a download="resume_arun.pdf" href='./resume_arun.pdf'>
                <button className="btn">
                    <i className="fa fa-download"></i> Download
                </button>
            </a>
        </div>
    );
};

export default Home;