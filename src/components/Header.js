import React, { Component } from 'react';
import "./header.css";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      
      
         <nav id="nav-wrap">
             <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#projects">Projects</a></li>
             <li><a className="smoothscroll" href="#contactform">contact</a></li>
               
            </ul>
         </nav>

        
         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

    
      </React.Fragment>
    );
  }
}