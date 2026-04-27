import React from "react";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-container">
        <div className="home-content">
          <h1>
            Hi, I'm <span>Kajal Prusty</span>
          </h1>

          <p className="tagline">Software Developer</p>

          <p>
            A passionate developer skilled in building web applications with modern
            technologies. Fresh graduate eager to contribute and grow.
          </p>

          <div className="cta-buttons">
           

            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="home-visual">
          <div className="profile-card">
            <div className="profile-avatar">👩‍💻</div>
            <h3>Kajal Prusty</h3>
            <p className="role">Software Developer</p>
            <p className="status">
              <span className="status-dot"></span>
              Open to Opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;