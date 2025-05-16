import React from 'react';
import './about.css';

const About = () => {
    return (
        <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic" src={require('./image/ph.jpg')}  alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>Passionate Computer Science graduate with strong programming skills in Java and Python.</p>
                <p>Eager to join a dynamic organization where I can contribute to projects, continue learning, and grow my technical expertis </p>
                <li><strong>Bachelor in Information Technology</strong>    Yadava college </li>
                <li><strong>Master of science in Computer science</strong>   Thiagarajar college</li>
               <div className="row">

                  <div className="column contact-details">

                  <h2>Contact Details</h2>
                  <p>ARUN HARIHARAN</p>
                  <p>Madurai,Tamil Nadu,India</p>
                  <p> 7092532613</p>
                  <p>arungobi307@gmail.com</p>
               
            
           


                  
       			       					   
                  </div>
               </div>
            </div>
        </div>
      </section>
    );
  }


export default About;