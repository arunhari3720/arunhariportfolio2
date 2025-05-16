import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import './components/styles.css';
import './components/footer.css';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <section id="home">
                    <Home />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="contactform">
                    <ContactForm /> {/* If you have a contact section */}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default App;