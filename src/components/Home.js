import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

import './home.css';
import './footer.css';

const Home = () => {
    const text = "Arun Hari Haran";
    const [letters, setLetters] = useState([]);


    useEffect(() => {
        // Split text into individual characters
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
                ))}  </h1>
            <p className="fade-in">Freelance developer creating digital magic — one line of code at a time.</p>
            <br></br>
            <br></br>
            <br></br>
               <div className="social-media">
                <h3>Connect with me:</h3>
                <br></br>
                <br></br>
                <ul className="social-icons">
                    
                        <a href="https://www.linkedin.com/in/arun-hariharan-2226b5211/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} color='white' />
                        </a>
                              <br></br>
                              <br></br>
                    
                        <a href="https://github.com/arunhari3720" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} color='white' />
                        </a>
                    
                </ul>
                <br></br>
                <br></br>
                <br></br>
            </div>
                        <font>click to get my resume</font>
                        <br></br>
                        <br></br>
                        <br></br>
                        <a  download=" resume_arun.pdf" href='./resume _arun.pdf'>
                        <button class="btn"><i class="fa fa-download"></i> Download</button> </a>
                    
            
            
        </div>
    );
};

export default Home;

            
        

            
        
        
            
            
            
  