import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <div className="NavBoxMain">
        <div className="NavBox">
          <div className="Navhead">
            <div className="Navheadtext">{props.Navhead}</div>
          </div>
          <ul className="Navitems">
            <li className="Navitem" id="home">
              <Link to="/">Home</Link>
            </li>
            <li className="Navitem" id="about">
              <Link to="/about">About Me</Link>
            </li>
            <li className="Navitem" id="skill">
              <Link to="/skill">Skills</Link>
            </li>
            <li className="Navitem" id="project">
              <Link to="/project">Projects</Link>
            </li>
            <li className="Navitem" id="contact">
              <Link to="/contact">Contacts Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
