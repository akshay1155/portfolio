import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo">AR<span className="text-gradient">.</span></a>
        
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#certifications" onClick={() => setIsMenuOpen(false)}>Certifications</a>
          <a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a>
          <div className="nav-socials">
            <a href="https://github.com/akshay1155" target="_blank" rel="noreferrer"><GithubIcon size={20} /></a>
            <a href="https://www.linkedin.com/in/reddy-akshay-kumar-824722199/" target="_blank" rel="noreferrer"><LinkedinIcon size={20} /></a>
            <a href="mailto:akshaykumarreddy1155@gmail.com"><Mail size={20} /></a>
          </div>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
