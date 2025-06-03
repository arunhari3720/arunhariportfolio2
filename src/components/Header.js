import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  toggleMobileMenu = () => {
    const nav = document.getElementById('nav');
    const btn = document.querySelector('.mobile-btn');
    nav.classList.toggle('open');
    btn.classList.toggle('open');
  };

  closeMobileMenu = () => {
    const nav = document.getElementById('nav');
    const btn = document.querySelector('.mobile-btn');
    nav.classList.remove('open');
    btn.classList.remove('open');
  };

  render() {
    return (
      <header>
        {/* Navigation Bar */}
        <nav id="nav-wrap">
          {/* ✅ Toggle button moved inside nav-wrap */}
          <button className="mobile-btn" onClick={this.toggleMobileMenu} aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home" onClick={this.closeMobileMenu}>
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about" onClick={this.closeMobileMenu}>
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#projects" onClick={this.closeMobileMenu}>
                Projects
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contactform" onClick={this.closeMobileMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}
