import React from "react";
import "./About.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import profile from './profile-pic.png';

export default function About(props) {
  document.title = "Avinash Sharma | About";

  const el1 = useRef(null);

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
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
    });

    // Destropying
    return () => {
      typed1.destroy();
      // typed2.destroy();
    };
  }, []);

  return (
    <>
      <div className="homeAboutBox TAboutBox ATAboutBox ">
        <div className="aboutImgBox AaboutImgBox">
          <img className="aboutImg aboutImgMrg" src={profile}></img>
        </div>
        <div className="aboutBox TaboutBox ATaboutBox">
          <div className="abouttext">
            About&nbsp;
            <span>Me</span>
          </div>
          <hr></hr>
          <div className="aboutskill">
            <span className="aboutskillauto" ref={el1}></span>
          </div>
          <div className="aboutdetail Aaboutdetail">
            <span>--</span>
            Motivated fresher software developer with good knowledge of Java,
            Python, and JavaScript. Eager to apply skills, learn new
            technologies, and contribute to impactful software development
            projects. Full-stack development utilizing languages such as Java,
            Python, and JavaScript Expertise in web development frameworks like
            Flask and Node.js Proficient in database design and management using
            SQL. I’m a web developer. I spend my whole day, practically every
            day, experimenting with HTML, CSS, JavaScript, and Python. I use
            Visual Studio Code to develop web applications. Visual Studio Code
            is a very simple application and it supports many programming
            languages like JavaScript, Python, and Java programming and it's a
            lightweight application. Because of this, I have been using VS Code
            for 3 years. I like Python language and I have written the backend
            of many websites in Python.
          </div>
        </div>
      </div>
      <div className="aboutDetailEnd">
        <div>
          <span>---</span>
          Android Developers are mobile technology experts who create
          applications for mobile devices using the Android platform. The usual
          work duties of Android Developers are designing new features,
          collaborating with cross-functional teams, testing code, fixing bugs,
          and improving application efficiency.
        </div>
        <div>
          <span>---</span>
          Developed and maintained robust web applications using cutting-edge
          technologies, resulting in improved user experiences and increased
          customer satisfaction.Collaborated with cross-functional teams,
          including designers, product managers, and quality assurance, to
          ensure the successful delivery of software projects., collaborating
          with cross-functional teams, testing code, fixing bugs, and improving
          application efficiency.
        </div>
        <div>
          <span>---</span>
          Developed and maintained robust web applications using cutting-edge
          technologies, resulting in improved user experiences and increased
          customer satisfaction.
        </div>
        <div>
          <span>---</span>
          Collaborated with cross-functional teams, including designers, product
          managers, and quality assurance, to ensure the successful delivery of
          software projects. Conducted thorough testing and debugging of
          applications to identify and resolve issues, ensuring high-quality
          code and optimal performance.
        </div>
        <div>
          <span>---</span>
          Implemented version control systems, such as Git, to facilitate
          efficient collaboration and code management within the development
          team. Actively participated in code reviews and provided constructive
          feedback to enhance code quality and adherence to best practices.
        </div>
      </div>

      <div className="education">
        <hr></hr>
        <div className="educationHead">
          Educa<span>tion</span>
        </div>
        <hr></hr>

        <div className="education1">
          <div className="education1Head">Mumbai University</div>
          <div className="education1Text">
            BACHELOR OF INFORMATION TECHNOLOGY
          </div>
          <div className="education1Clg">
            <div>- D.G Ruparel College</div>
            <div>- 2020-2023</div>
          </div>
          <div className="education1Grade">
            - Grade : <span>A</span>
          </div>
        </div>

        <div className="education2">
          <div className="education2Head">Maharashtra State Board</div>
          <div className="education2Text1">HSC</div>
          <div className="education2Clg1">
            <div>- S.I.W.S</div>
            <div>- 2019-2020</div>
          </div>
          <div className="education2Grade1">
            - Percentage : <span>81.54%</span>
          </div>
          <div className="education2Text2">SSC</div>
          <div className="education2Clg2">
            <div>- S.P.H.S</div>
            <div>- 2017-2018</div>
          </div>
          <div className="education2Grade2">
            - Percentage : <span>74.40%</span>
          </div>
        </div>
      </div>
    </>
  );
}
