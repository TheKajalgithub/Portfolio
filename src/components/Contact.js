import React from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-methods">

          <a href="mailto:prustykajal910@gmail.com" className="contact-card">
            <FaEnvelope />
            <h4>Email</h4>
            <p>prustykajal910@gmail.com</p>
          </a>

          <a href="tel:+918455858464" className="contact-card">
            <FaPhone />
            <h4>Phone</h4>
            <p>+91 8455858464</p>
          </a>

          <a
            href="https://github.com/TheKajalgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaGithub />
            <h4>GitHub</h4>
            <p>TheKajalgithub</p>
          </a>

          <a
            href="https://www.linkedin.com/in/kajal-prusty-38200k1/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaLinkedin />
            <h4>LinkedIn</h4>
            <p>Kajal Prusty</p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;