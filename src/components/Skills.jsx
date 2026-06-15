import React from 'react';
import { Cloud, Code, Terminal, GitBranch, Layers, Shield, Activity, Settings } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: <Cloud size={24} />,
    skills: ["AWS", "GCP", "Azure"]
  },
  {
    title: "Programming",
    icon: <Code size={24} />,
    skills: ["Python", "Java", "Springboot"]
  },
  {
    title: "IaC & Automation",
    icon: <Settings size={24} />,
    skills: ["Terraform", "AWS CDK", "Boto3"]
  },
  {
    title: "Containerization",
    icon: <Layers size={24} />,
    skills: ["Docker", "Kubernetes (K8s)", "Helm", "Rancher"]
  },
  {
    title: "CI/CD & DevOps",
    icon: <GitBranch size={24} />,
    skills: ["Jenkins", "Gitlab CI", "GitHub Actions"]
  },
  {
    title: "Monitoring",
    icon: <Activity size={24} />,
    skills: ["Grafana", "Prometheus", "ELK Stack"]
  },
  {
    title: "Security",
    icon: <Shield size={24} />,
    skills: ["SonarQube", "Trivy", "HashiCorp Vault"]
  },
  {
    title: "OS & Version Control",
    icon: <Terminal size={24} />,
    skills: ["Linux", "Git", "GitHub"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="grid grid-cols-2 lg-grid-cols-4">
          {skillCategories.map((category, index) => (
            <div className="glass-panel skill-card" key={index}>
              <div className="skill-icon">
                {category.icon}
              </div>
              <h3 className="skill-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span className="skill-tag" key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
