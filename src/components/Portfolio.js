import React from 'react';
import './App.css';


const Portfolio = () => {
    return (
        <div className="portfolio">
        <header>
        <p> hi how are you</p>
            <h1 className="fade-in">Welcome to My Portfolio</h1>
            <p className="fade-in">I'm ARUN web developer and designer.</p>
        </header>
        <section className="projects">
            <h2 className="fade-in">Projects</h2>
            <div className="card-container">
                <div className="card fade-in">
                    <h3>STUDENT REQUISUTION PORTAL</h3>
                    <p>Description of project 1.</p>
                </div>
                <div className="card fade-in">
                    <h3>PORTFOLIO</h3>
                    <p>Description of project 2.</p>
                </div>
                <div className="card fade-in">
                    <h3>Project 3</h3>
                    <p>name  of project .</p>
                </div>
            </div>
        </section>
    </div>
);
};

            

export default Portfolio;