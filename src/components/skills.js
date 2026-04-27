import React from "react";
import {
  FaJava,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-row" key={index}>
              <span className="icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;