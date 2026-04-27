import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Kajal Prusty</p>

      <div className="footer-links">
        <a href="https://github.com/TheKajalgithub" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/kajal-prusty-38200k1/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="mailto:prustykajal910@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;