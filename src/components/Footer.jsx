import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#" className="nav-logo">AR<span className="text-gradient">.</span></a>
          <p>Cloud & DevOps Engineer</p>
        </div>
        
        <div className="footer-socials">
          <a href="https://github.com/akshay1155" target="_blank" rel="noreferrer" className="social-link">
            <GithubIcon size={20} />
          </a>
          <a href="https://www.linkedin.com/in/reddy-akshay-kumar-824722199/" target="_blank" rel="noreferrer" className="social-link">
            <LinkedinIcon size={20} />
          </a>
          <a href="mailto:akshaykumarreddy1155@gmail.com" className="social-link">
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Reddy Akshay Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
