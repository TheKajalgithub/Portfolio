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
              I’m a 2025 graduate and a Full Stack Software Developer with a strong foundation in Java, SQL, React, and Spring Boot.
              I have hands-on experience building web applications with a focus on creating responsive user interfaces and implementing structured backend logic.
              One of my key projects is my personal portfolio website, which I developed using React and deployed on Netlify. 
              It highlights my ability to design clean user interfaces, structure components effectively, and manage the complete deployment process.
              I’m particularly interested in building efficient and user-friendly applications, and I enjoy solving real-world problems through code. 
              I’m currently looking for an opportunity where I can apply my skills, contribute to meaningful projects, and continue growing as a software developer.
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