import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const roles = [
  'Cloud & DevOps Engineer',
  'Site Reliability Engineer',
  'Platform Engineer',
  'DevOps Engineer',
  'Infrastructure Engineer',
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 400;

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const fullText = roles[roleIndex];

    if (!isDeleting) {
      const next = fullText.substring(0, displayText.length + 1);
      setDisplayText(next);
      if (next === fullText) {
        setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
        return;
      }
    } else {
      const next = fullText.substring(0, displayText.length - 1);
      setDisplayText(next);
      if (next === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }
    }
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const timer = setTimeout(tick, displayText === roles[roleIndex] ? PAUSE_AFTER_TYPE : (displayText === '' && isDeleting ? PAUSE_AFTER_DELETE : speed));
    return () => clearTimeout(timer);
  }, [tick, displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-bg-glow hero-glow-1" />
      <div className="hero-bg-glow hero-glow-2" />
      <div className="hero-bg-glow hero-glow-3" />
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-name animate-fade-in delay-200">
            Reddy Akshay Kumar<span className="text-gradient">.</span>
          </h1>
          <h3 className="hero-role animate-fade-in delay-300">
            <span className="hero-role-text">{displayText}</span>
            <span className="hero-cursor" />
          </h3>
          <p className="hero-summary animate-fade-in delay-400">
            3+ years designing, automating & managing scalable multi-cloud infrastructure.
            Specialized in Infrastructure as Code, container orchestration, and CI/CD pipeline development.
          </p>
          <div className="hero-actions animate-fade-in delay-500">
            <a href="#experience" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a
              href="/Akshay_kumar_DevOps_Engineer.pdf"
              download
              className="btn btn-resume"
            >
              <Download size={18} /> Download Resume
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
