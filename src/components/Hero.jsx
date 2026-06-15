import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h2 className="hero-greeting animate-fade-in delay-100">Hello, I'm</h2>
          <h1 className="hero-name animate-fade-in delay-200">
            Reddy Akshay Kumar<span className="text-gradient">.</span>
          </h1>
          <h3 className="hero-role animate-fade-in delay-300">
            Cloud & DevOps Engineer
          </h3>
          <p className="hero-summary animate-fade-in delay-400">
            With over 3 years of experience designing, automating, and managing scalable and secure multi-cloud infrastructure. 
            I specialize in Infrastructure as Code, container orchestration, and CI/CD pipeline development.
          </p>
          <div className="hero-actions animate-fade-in delay-500">
            <a href="#experience" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="mailto:akshaykumarreddy1155@gmail.com" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
