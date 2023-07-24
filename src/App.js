import React, { useState } from "react";

import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Skill from "./component/Skill";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar Navhead="Avinash's PortFolio" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/project" element={<Project />} />
          <Route exact path="/skill" element={<Skill />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/PortFolio" element={<Home />} />
        </Routes>
        <Footer footerhead="Avinash's PortFolio" />
      </Router>
    </>
  );
}

export default App;
