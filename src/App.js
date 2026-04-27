import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const MainPage = () => {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<h1 style={{ padding: "100px" }}>Projects Page</h1>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;