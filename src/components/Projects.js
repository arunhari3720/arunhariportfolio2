// Projects.js
import React, { useState } from 'react';
import './projects.css'; // Optional styles
import SkillsChart from './SkillChart';
import samimage from './image/sam.jpg'
import project2 from './image/poj2.jpg'
import project3 from './image/poj3.jpg'
import project4 from './image/poj4.jpg'

const projects = [
    {
        title: 'Single page using react',
        image: samimage, // Replace with your project image URL
        description: 'Pustaka is a digital e-book company.pustaka wanted to change their multipage application to single page application for better peformance and satisfies their autor requirement'
    },
    {
        title: 'Student Requisition Portal',
        image:project2 , // Replace with your project image URL
        description: 'Student can use the portal to submit any of his request to his instution through online'
    },
    {
        title: 'Broadcast Encryption With Efficient Encryption',
        image: project3, // Replace with your project image URL
        description: 'Cryptographic prmitives allowing a sender to securely encrypt to any subset of the user of the service without relying on a fully trusted dealer.'
    },
     {
        title: 'Portfolio Using React',
        image: project4, // Replace with your project image URL
        description: 'single page portfolio using reaact to display my works etc.'
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleImageClick = (project) => {
        setSelectedProject(project);
    };

    const handleClose = () => {
        setSelectedProject(null);
    };

    const handleModalClick = (e) => {
        e.stopPropagation(); // Prevent click event from bubbling up to the modal background
    };

    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <br></br>
            <br></br>
            <div className="project-gallery">
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            onClick={() => handleImageClick(project)} 
                            className="project-image"
                        />
                        <h2>{project.title}</h2>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="project-modal" onClick={handleClose}>
                    <div className="modal-content" onClick={handleModalClick}>
                        <span className="close" onClick={handleClose}>&times;</span>
                        <h2>{selectedProject.title}</h2>
                        <p>{selectedProject.description}</p>
                    </div>
                </div>
            )}

            <br></br>
            <br></br>
            <br></br>
           { /* Render Skills Chart Here */}
            <div className="skills-chart-container">
                <h2>Skill Set</h2>
                <SkillsChart /> {/* Render the Skills Chart */}
            </div>

        </div>
    );
};

export default Projects;