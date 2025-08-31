import React from 'react';
import '../styles/hero.scss';
import avatar from '../assets/avatar_3.png'; // replace with your image

const Hero = () => {
  return (
    <section className="hero" id="hero">
        <div className="hero-left">
            <img src={avatar} alt="Avatar" className="avatar" />
        </div>
        <div className="hero-right">
            <h1>Hi, I'm Kristiāna</h1>
            <h2 className="subtitle">Full-Stack Developer | Software Architect in progress </h2>
            <p>
            I’m a software developer passionate about building full-stack applications, crafting smooth user experiences, and learning new technologies.
            </p>
            <div className="hero-buttons">
            <a href="#contact" className="btn primary">Contact Me</a>
            <a href="#projects" className="btn secondary">View Projects</a>
            </div>
            <div className="social-links">
            <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
            </a>
            </div>
        </div>
    </section>

  );
};

export default Hero;
