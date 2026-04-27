import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>

        <div className="about-grid">
          <div className="about-text">
            <h3>Software Developer</h3>
            <p>
              I'm a <span className="highlight">2025 graduate</span> passionate about
              building scalable web applications.
            </p>
            <p>
              Skilled in React, Java, Spring Boot, and SQL with hands-on project experience.
            </p>
          </div>

          <div className="experience-card">
            <h4>
              Status <span className="badge">Open to Work</span>
            </h4>

            <ul>
              <li>Full-stack development</li>
              <li>REST APIs</li>
              <li>Database design</li>
              <li>Responsive UI</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;