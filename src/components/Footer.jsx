import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-2 mb-md-1">© {new Date().getFullYear()} Mazhar Rasheed. All rights reserved.</p>

        {/* Social Links */}
        <div className="d-flex justify-content-center gap-3">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-light text-decoration-none"
          >
            <i className="bi bi-github fs-4"></i> GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-light text-decoration-none"
          >
            <i className="bi bi-linkedin fs-4"></i> LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-light text-decoration-none"
          >
            <i className="bi bi-envelope-fill fs-4"></i> Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
