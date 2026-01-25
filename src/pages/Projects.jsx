import React from 'react';
import './Projects.css'; // Import the new CSS
import { useNavigate } from 'react-router-dom';

const projectData = [
  {
    title: "Nodality AI",
    description: "A digital workspace for brainstorming. Allows users to create dynamic nodes and visualize hierarchical relationships.",
    path: "/projects/Nodalityai",
    tech: ["React", "SVG", "Framer Motion"],
    link: "#" 
  },
  {
    title: "navigator.ai",
    description: "A tool designed to optimize commute times by analyzing local traffic patterns and suggesting alternative routes.",
    path: "/projects/Navigatorai",
    tech: ["Javascript", "Python", "OpenAI API", "OpenOttawa API", "HTML/CSS"],
    link: "#"
  },
  {
    title: "Tempora",
    description: "A browser utility built to enhance productivity by streamlining common web tasks.",
    path: "/projects/Tempora",
    tech: ["JavaScript", "Chrome API", "CSS"],
    link: "#"
  },
  {
    title: "LazyPaste",
    description: "(LazyHacks 2023) Developed a functional prototype for [Insert Problem Here] within a 24-hour sprint.",
    path: "/projects/LazyPaste",
    tech: ["Next.js", "Firebase", "Auth0"],
    link: "#"
  }
];

export default function Projects() {
  const navigate = useNavigate();

  const handleProjectClick = (path) => {
    navigate(path);
  };

  const handleMouseEnter = () => { window.__UI_HOVERING__ = true; };
  const handleMouseLeave = () => { window.__UI_HOVERING__ = false; };

  return (
    <div className="page projects-container">
      <h2>projects</h2>
      <p>Here you find some things I've been busy with!</p>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div 
            key={index} 
            className="project-card"
            onClick={() => navigate(project.path)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="project-links">
              <span className="project-link">View Project →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}