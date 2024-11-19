import React from "react";
import "./Projects.css";
import {
  FaLightbulb,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Street Light Management System",
      description:
        "A system for efficient monitoring and management of street lights, including status tracking, energy consumption analysis, and automated controls.",
      technologies: [<FaReact />, <FaNodeJs />, <FaDatabase />],
      //githubLink: "https://github.com/your-username/e-commerce-platform",
      githubLink: null,
      //demoLink: "https://ecommerce-demo.example.com",
      demoLink: null,
    },
    {
      title: "Smart Water Management System",
      description:
        "A system for efficient monitoring and management of water tanks, including status tracking, energy consumption analysis, and automated controls.",
      technologies: [<FaReact />, <FaNodeJs />, <FaDatabase />],
      githubLink: null,
      demoLink: null,
    },
    {
      title: "Jewellery Management System",
      description:
        "The Jewellery Management System is a comprehensive software solution offers functionalities to purchases, customer relationships, and staff, ensuring efficient and smooth day-to-day operations",
      technologies: [<FaReact />, <FaNodeJs />, <FaDatabase />],
      demoLink: "https://skv.moiaccount.in",
    },
    {
      title: "Chilli Business Blog Site",
      description:
        "The Chilli Business Blog Marketing Site is a content-driven platform designed to promote and market chili-related products and services. The site serves as a hub for industry insights, product promotions, recipes, and chili farming tips",
      technologies: [<FaReact />, <FaNodeJs />, <FaDatabase />],
      demoLink: "https://vsr.moiaccount.in/",
    },
    {
      title: "Stock Management System For Jewellery Shops",
      description:
        "It offers streamlined tracking of jewellery items, including their designs, weights, and precious materials (e.g., gold, silver, diamonds). This system reduces manual errors, improves operational efficiency, and ensures the shop owner can make informed decisions about stock and sales.",
      technologies: [<FaReact />, <FaNodeJs />, <FaDatabase />],
    },
  ];

  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h5>{project.title}</h5>
              <div className="project-technologies">
                {project.technologies.map((icon, idx) => (
                  <span key={idx} className="technology-icon">
                    {icon}
                  </span>
                ))}
              </div>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Visit Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
