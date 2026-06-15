import React from 'react';
import { GraduationCap } from 'lucide-react';
import './Education.css';

const education = [
  {
    degree: "B.Tech. in Computer Science",
    school: "SRKR Engineering College",
    period: "July 2019 – April 2023",
    cgpa: "7.5"
  },
  {
    degree: "XII standard",
    school: "Sri Chaitanya Junior College",
    period: "July 2017 – April 2019",
    cgpa: "10"
  },
  {
    degree: "X standard",
    school: "Abhyudaya High School, Bobbili",
    period: "April 2017",
    cgpa: "9.5"
  }
];

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">
          Education <span className="text-gradient">Background</span>
        </h2>
        
        <div className="grid grid-cols-1 md-grid-cols-3">
          {education.map((edu, index) => (
            <div className="glass-panel edu-card" key={index}>
              <div className="edu-icon-wrapper">
                <GraduationCap size={24} className="edu-icon" />
              </div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-school">{edu.school}</h4>
              <div className="edu-details">
                <span className="edu-period">{edu.period}</span>
                <span className="edu-cgpa">CGPA: {edu.cgpa}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
