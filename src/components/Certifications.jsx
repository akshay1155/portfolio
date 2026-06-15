import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import './Certifications.css';

const certifications = [
  {
    name: "Google Cloud Certified – Professional Cloud DevOps Engineer",
    link: "https://www.credly.com/badges/f6620794-92b0-4394-a96d-2025c49d6004"
  },
  {
    name: "AWS Certified Developer – Associate",
    link: "https://www.credly.com/badges/2a028b33-05e5-4e3d-bc79-4a313c2eb4d3"
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    link: "https://www.credly.com/badges/7874d337-7d53-4146-98eb-f05ac92b37d9"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">
          Licenses & <span className="text-gradient">Certifications</span>
        </h2>
        
        <div className="grid grid-cols-1 md-grid-cols-3">
          {certifications.map((cert, index) => (
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noreferrer" 
              className="glass-panel cert-card"
              key={index}
            >
              <Award className="cert-icon" size={32} />
              <h3 className="cert-title">{cert.name}</h3>
              <div className="cert-link">
                View Credential <ExternalLink size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
