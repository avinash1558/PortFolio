import React from "react";
import { useEffect, useRef } from "react";
import "./Home.css";
import Typed from "typed.js";
import profile from "./profile-pic.png";
import project1 from "./project1.png";
import project2 from "./project2.png";
import project3 from "./project3.png";
import project4 from "./project4.png";
import project5 from "./project5.png";
import CircularProgressBar from "./circularProgressBar";
import { Link } from "react-router-dom";

export default function Home(props) {
  document.title = "Avinash Sharma | Home";

  const el1 = useRef(null);
  const el2 = useRef(null);
  useEffect(() => {
    const typed1 = new Typed(el1.current, {
      strings: [
        "Python Developer",
        "- Django ",
        "- Flask",
        "Full Stack Developer",
        "- HTML CSS",
        "- JavaScript",
        "- React Js",
        "Java Developer",
        "Android Developer",
        "Software Developer",
      ],
      // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
    });
    const typed2 = new Typed(el2.current, {
      strings: [
        "Python Developer",
        "- Django ",
        "- Flask",
        "Full Stack Developer",
        "- HTML CSS",
        "- JavaScript",
        "- React Js",
        "Java Developer",
        "Android Developer",
        "Software Developer",
      ],
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
    });
    // Destropying
    return () => {
      typed1.destroy();
      typed2.destroy();
    };
  }, []);

  return (
    <>
      <div className="HomeBox">
        <div>
          <div className="homeTextBox">
            <div className="homeTitle">
              <span>Hello,</span> It's Me
            </div>
            <div className="homeName">Avinash Sharma</div>
            <div className="homeSkillMain">
              <div className="homeSkill">
                And I'm a&nbsp;
                <span className="homeskillauto" ref={el1}></span>
              </div>
            </div>
            <div className="homeDetail">
              Motivated fresher software developer with good knowledge of Java,
              Python, and JavaScript. Eager to apply skills, learn new
              technologies, and contribute to impactful software
              developmentprojects.
            </div>
          </div>

          <div className="homeIconBox">
            <div>
              <Link className="homeIcon" to="/">
                {/* <a className="homeIcon" href="/"> */}
                <iconify-icon icon="mingcute:youtube-line"></iconify-icon>
                {/* </a> */}
              </Link>
            </div>
            <div>
              <a
                className="homeIcon"
                href="https://www.linkedin.com/in/avinash-sharma-0a334825a/"
                target="_blank"
              >
                <iconify-icon icon="mdi:linkedin"></iconify-icon>
              </a>
            </div>
            <div>
              <a
                className="homeIcon"
                href="https://github.com/avinash1558"
                target="_blank"
              >
                <iconify-icon icon="mdi:github"></iconify-icon>
              </a>
            </div>
            <div>
              <Link className="homeIcon" to="/">
                {/* <a className="homeIcon" href="/"> */}
                <iconify-icon icon="mdi:instagram"></iconify-icon>
                {/* </a> */}
              </Link>
            </div>
          </div>

          <div className="btnBox">
            <a
              className="btnItem"
              href="https://github.com/avinash1558/Resume"
              target="_blank"
            >
              Resume
            </a>
            <a
              className="btnItem"
              href="https://github.com/avinash1558"
              target="_blank"
            >
              Visit GitHub
            </a>
          </div>
        </div>
        <div className="HomeImgBox">
          <img className="HomeImg" src={profile}></img>
        </div>
      </div>

      <div id="homeProjectsBox">
        <div className="homeProjects container">
          <div className="homeProjectsHeader">
            <hr></hr>

            <h1 className="section-title">
              Project <span>Details</span>
            </h1>
            <hr className="hr"></hr>
          </div>

          <div className="homeProjectsAll ">
            <div className="homeProject-item" id="homeProject-item1">
              <div className="homeProject-info">
                <h1>DESKTOP ASSISTANT</h1>
                <h2>PYTHON LANGUAGE (DESKTOP APPLICATION)</h2>
                <p>
                  This is commonly used in voice assistants like Alexa, Siri,
                  etc. In Python there is an API called SpeechRecognition which
                  allows us to convert speech into text. It was an interesting
                  task to make my own assistant......
                </p>
                <Link to="/project">More</Link>
              </div>
              <div className="homeProject-img">
                <img src={project1} alt="img" />
              </div>
            </div>

            <div className="homeProject-item" id="homeProject-item2">
              <div className="homeProject-info">
                <h1>JOB SEARCH</h1>
                <h2>JAVA LANGUAGE (ANDROID APPLICATION)</h2>
                <p>
                  A job search Android application is a mobile application that
                  allows users to search for job opportunities directly from
                  their Android devices. It provides a platform for job seekers
                  to browse through various job listings, explore.....
                </p>
                <Link to="/project">More</Link>
              </div>
              <div className="homeProject-img">
                <img src={project2} alt="img" />
              </div>
            </div>

            <div className="homeProject-item" id="homeProject-item3">
              <div className="homeProject-info">
                <h1>COLLEGE WEBSITE</h1>
                <h2>HTML, CSS AND JAVASCRIPT PYTHON LANGUAGE</h2>
                <p>
                  This includes sections such as home page with news and
                  announcements, an about us section highlighting the
                  institution's history and mission, academic programs offered,
                  admissions details, faculty and staff profiles, events.....
                </p>
                <Link to="/project">More</Link>
              </div>
              <div className="homeProject-img">
                <img src={project3} alt="img" />
              </div>
            </div>
            {/*  */}
            <div className="homeProject-item" id="homeProject-item4">
              <div className="homeProject-info">
                <h1>AVINASH'S PORTFOLIO</h1>
                <h2>HTML CSS REACT JS</h2>
                <p>
                  A portfolio website is a unique way to showcase your work and
                  let others know about yourself. It’s like an evergreen
                  platform for your projects, case studies, and information
                  about you. In addition, it’s one of the best ways to
                  express.....
                </p>
                <Link to="/project">More</Link>
              </div>
              <div className="homeProject-img">
                <img src={project4} alt="img" />
              </div>
            </div>

            <div className="homeProject-item" id="homeProject-item5">
              <div className="homeProject-info">
                <h1>DOT TECH</h1>
                <h2>HTML CSS</h2>
                <p>
                  This website was for the competition of college dot tech
                  festival. In which I got 3rd rank. This is a website made of
                  complete HTML and CSS
                </p>
                <Link to="/project">More</Link>
              </div>
              <div className="homeProject-img">
                <img src={project5} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Barbox">
        <CircularProgressBar></CircularProgressBar>
      </div>

      <div className="homeAboutBox">
        <div className="aboutImgBox">
          <img className="aboutImg" src={profile}></img>
        </div>
        <div className="aboutBox">
          <div className="abouttext">
            About&nbsp;
            <span>Me</span>
          </div>
          <hr></hr>
          <div className="aboutskill">
            <span className="aboutskillauto" ref={el2}></span>
          </div>
          <div className="Haboutdetail">
            Information Technology Student. Motivated fresher software developer
            with good knowledge of Java, Python, and JavaScript. Eager to apply
            skills, learn new technologies, and contribute to impactful software
            development projects.
          </div>
          <div className="aboutBtn">
            <Link to="/about">More About Me</Link>

            {/* <a href="/about">More About Me</a> */}
          </div>
        </div>
      </div>
    </>
  );
}
