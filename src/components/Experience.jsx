import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    role: "DevOps Engineer",
    company: "Particle41",
    location: "Remote",
    period: "Feb 2026 – Present",
    highlights: [
      "Developed 10+ reusable Terraform modules to standardize and accelerate infrastructure provisioning across multi-tenant GCP environments, reducing code duplication by ~40% and improving maintainability across teams.",
      "Automated end-to-end infrastructure provisioning for 15+ GCP services — including Cloud Run, API Gateway, Cloud Storage, Firebase Hosting, Artifact Registry, VPC Networking, Cloud Scheduler, Service Accounts, and Firestore — cutting manual provisioning time by ~60% and enabling consistent deployments across a multi-tenant client architecture.",
      "Designed and maintained CI/CD pipelines for Terraform workflows using GitHub Actions, automating plan, validate, and apply stages — reducing infrastructure deployment time by ~50% and eliminating manual errors in production rollouts."
    ]
  },
  {
    role: "DevOps Engineer",
    company: "Sify Technologies Limited",
    location: "Hyderabad",
    period: "July 2023 – Feb 2026",
    highlights: [
      "Engineered and deployed a highly available, multi-cloud infrastructure on AWS and GCP, achieving 99.95% uptime while supporting a 40% year-over-year growth in application traffic.",
      "Architected a robust security framework utilizing AWS IAM roles, GCP Cloud IAM, and VPC service controls, which resulted in zero critical security incidents over a 24-month period and passed all compliance audits.",
      "Authored and maintained a library of over 50 reusable Terraform modules for both AWS and GCP, establishing a standardized IaC practice that accelerated new environment provisioning time by over 90%.",
      "Engineered a secure and collaborative Terraform workflow using AWS S3 for remote state and DynamoDB for state locking, enabling a team of 10+ engineers to manage infrastructure code concurrently without conflicts.",
      "Collaborated with development teams to design and manage end-to-end CI/CD pipelines using Jenkins, GitLab CI, and Google Cloud Build, increasing deployment frequency by 4x while maintaining a 99.8% success rate.",
      "Provisioned and managed 5+ production-grade Kubernetes clusters (GKE and EKS), including complex configurations with both CPU and GPU-accelerated node pools to support machine learning workloads.",
      "Led the containerization of 10+ legacy monolithic applications using Docker, improving application portability and reducing environment-specific deployment failures by 100%.",
      "Developed and maintained a repository of 15+ reusable Helm charts, standardizing the deployment process for microservices on Kubernetes and reducing new service onboarding time from days to hours.",
      "Architected a fully serverless data processing pipeline on GCP using Cloud Functions, Pub/Sub, and Cloud Run, reducing monthly infrastructure costs by 60% compared to the previous VM-based solution.",
      "Developed Python-based serverless automation workflows with AWS Lambda and EventBridge to automate security patching and compliance reporting, cutting the manual operational workload by approximately 15 hours per week."
    ]
  },
  {
    role: "DevOps Intern",
    company: "Sify Technologies Limited",
    location: "Hyderabad",
    period: "March 2023 – June 2023",
    highlights: [
      "Architected and developed a custom, hardened Linux OS for secure examination servers, implementing PXE boot capabilities that allowed for the rapid, on-demand deployment of 100+ secure client systems.",
      "Implemented a real-time monitoring and observability stack using Prometheus and Grafana, which improved incident detection time by 75% and provided key performance metrics that contributed to a 10% increase in overall system uptime."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="glass-panel timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="role">{exp.role}</h3>
                    <h4 className="company">
                      <Briefcase size={16} /> {exp.company} — {exp.location}
                    </h4>
                  </div>
                  <div className="period">
                    <Calendar size={16} /> {exp.period}
                  </div>
                </div>
                <ul className="highlights">
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
