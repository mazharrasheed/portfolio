
import React from 'react';

const projects = [
  {
    title: 'Store Managet System',
    description: 'A Django-based web app to manage product dispatches with live stock validation and printable passes.',
    tech: ['Django', 'JavaScript', 'Bootstrap'],
    link: 'https://mashsystems.pythonanywhere.com/',
  },
  {
    title: 'Account Management System',
    description: 'A Django-based web app to manage accounts, transctions, balance sheet abd printable accout statements.',
    tech: ['Django', 'JavaScript', 'Bootstrap'],
    link: 'https://mashsystems.pythonanywhere.com/',
  },
  {
    title: 'Sales Management System',
    description: 'A Django-based web app to manage product dispatches with live stock validation and printable passes.',
    tech: ['Django', 'JavaScript', 'Bootstrap'],
    link: 'https://mashsystems.pythonanywhere.com/',
  },
  {
    title: 'Gate Pass System',
    description: 'A Django-based web app to manage product dispatches with live stock validation and printable passes.',
    tech: ['Django', 'JavaScript', 'Bootstrap'],
    link: 'https://mashsystems.pythonanywhere.com/',
  },
  {
    title: 'Goods Recieve Note System',
    description: 'A Django-based web app to manage product dispatches with live stock validation and printable passes.',
    tech: ['Django', 'JavaScript', 'Bootstrap'],
    link: 'https://mashsystems.pythonanywhere.com/',
  },
  {
    title: 'Portfolio Website',
    description: 'This very site – a React-based personal portfolio showcasing projects and skills.',
    tech: ['React', 'Bootstrap'],
    link: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'Smartwatch AI Agent',
    description: 'An AI-powered agent that scrapes e-commerce websites to suggest the best smartwatches.',
    tech: ['Python', 'BeautifulSoup', 'Selenium'],
    link: '/',
  },
];

function Projects() {
  return (
    <div className=" py-5 projects">
      <div className="container">
      <h2 className="text-center mb-5">My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6 col-lg-4 mb-4 h-100 " key={index}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column ">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <p className="mt-auto">
                  <small className="text-muted">Tech Used:</small><br />
                  {project.tech.map((tech, i) => (
                    <span key={i} className="badge bg-secondary me-1">{tech}</span>
                  ))}
                </p>
              </div>
              <div className="card-footer bg-transparent border-0 text-end">
                <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary">
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Projects;
