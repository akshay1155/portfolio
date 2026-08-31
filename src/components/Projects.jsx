import React from 'react';
import { FolderOpen, ExternalLink } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    company: 'Particle41',
    items: [
      {
        title: 'Multi-Tenant GCP Architecture',
        description:
          'Transformed a single-tenant GCP application into a fully multi-tenant platform. Designed GCP organization and project hierarchy, automated infrastructure provisioning with Terraform and GitHub Actions, and enabled isolated tenant environments using Cloud Run, Firebase Hosting, and Firestore.',
        tech: ['GCP', 'Terraform', 'GitHub Actions', 'Cloud Run', 'Firebase', 'Firestore'],
      },
      {
        title: 'Legacy Infrastructure Migration',
        description:
          'Migrated 15+ legacy applications and databases (SQL Server, PostgreSQL) from Windows Server 2008/2012 environments to modern infrastructure with zero downtime. Included Active Directory Domain Controller migration and end-to-end validation of all dependent services.',
        tech: ['Windows Server', 'SQL Server', 'PostgreSQL', 'Active Directory', 'Migration'],
      },
    ],
  },
  {
    company: 'Sify Technologies',
    items: [
      {
        title: 'AI Platform – Multi-Cloud K8s Provisioning & Model Deployment',
        description:
          'Built a unified AI platform enabling self-service Kubernetes cluster creation and AI/ML model deployment across GKE, EKS, AKS, and on-prem. Developed Terraform automation with a Flask backend that dynamically generates tfvars from UI inputs to provision clusters with GPU node pools, autoscaling, and custom networking. Deployed Rancher Management Server for centralized multi-cloud cluster lifecycle management.',
        tech: ['Terraform', 'Kubernetes', 'GKE', 'EKS', 'AKS', 'Flask', 'Rancher', 'GPU'],
      },
      {
        title: 'Times of India – Integrated Smart Content Archival (ISCA)',
        description:
          'Developed a content archival portal for 180+ years of historical data, featuring full-text search and a modern cloud-native architecture. Deployed the entire application stack on GCP using Cloud Run, Pub/Sub, and Cloud Storage. Managed infrastructure with custom private Terraform modules, implemented CI/CD with Jenkins, and set up observability using Grafana with GCP Cloud Logging as the data source.',
        tech: ['GCP', 'Cloud Run', 'Pub/Sub', 'Terraform', 'Jenkins', 'Grafana', 'Cloud Logging'],
      },
      {
        title: 'Unified Service Platform (USP) – On-Prem DevOps & Infra Automation',
        description:
          'Delivered end-to-end DevOps infrastructure for an enterprise client on-premises with secure VPN access. Provisioned 10+ isolated VMs across UAT, Staging, Production, CI/CD, and Monitoring tiers. Configured platform services including Flowable BPM, Swagger UI, and Kong API Gateway. Set up self-hosted GitLab with Runners for monorepo CI/CD pipelines spanning multiple environments. Implemented a full observability stack with ELK, Prometheus, Grafana, and PgAdmin for database management.',
        tech: ['GitLab CI', 'Docker', 'Kong', 'ELK Stack', 'Prometheus', 'Grafana', 'Linux', 'VPN'],
      },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        {projects.map((group, gi) => (
          <div className="project-group" key={gi}>
            <h3 className="project-company">
              <FolderOpen size={20} />
              {group.company}
            </h3>
            <div className="project-grid">
              {group.items.map((project, pi) => (
                <div className="glass-panel project-card" key={pi}>
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t, ti) => (
                      <span className="project-tag" key={ti}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
