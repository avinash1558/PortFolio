import React from "react";
import "./Project.css";
import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.png';
import project4 from './project4.png';
import project5 from './project5.png';
export default function Project() {
  document.title = "Avinash Sharma | Projects";

  return (
    <>
      <div className="project">
        <hr></hr>

        <div className="projectHead">
          Project <span>Details</span>
        </div>
        <hr className="hr"></hr>

        <div className="projectBox1">
          <div className="projectImg1">
            <img src={project1} alt="img" />
          </div>
          <div className="projectDetailBox1">
            <div className="projectDetailHead1"> DESKTOP ASSISTANT</div>
            <div className="projectDetailLan1">
              <div>- PYTHON LANGUAGE</div>
              <div>2023</div>{" "}
            </div>
            <div className="projectDetail1">
              This is commonly used in voice assistants like Alexa, Siri, etc.
              In Python there is an API called SpeechRecognition which allows us
              to convert speech into text. It was an interesting task to make my
              own assistant. It became easier to send emails without typing any
              word, Searching on Google without opening the browser, and
              performing many other daily tasks like playing music, opening your
              favorite IDE with the help of a single voice command.
            </div>
            <div className="projectbtn">
              <a className="projectbtnItem"  href="https://github.com/avinash1558/Projects/tree/main/Assistant"
                target="_blank">
                Visit GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="projectBox2">
          <div className="projectImg2">
            <img src={project2} alt="img" />
          </div>
          <div className="projectDetailBox2">
            <div className="projectDetailHead2">JOB SEARCH</div>
            <div className="projectDetailLan2">
              <div>- JAVA LANGUAGE</div>
              <div>2023</div>{" "}
            </div>
            <div className="projectDetail2">
              A job search Android application is a mobile application that
              allows users to search for job opportunities directly from their
              Android devices. It provides a platform for job seekers to browse
              through various job listings, explore details about each job, and
              apply for positions that match their skills and interests.
            </div>
            <div className="projectbtn">
              <a className="projectbtnItem"  href="https://github.com/avinash1558/Projects/blob/main/FinalProject.zip"
                target="_blank">
                Visit GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="projectBox3">
          <div className="projectImg3">
            <img src={project3} alt="img" />
          </div>
          <div className="projectDetailBox3">
            <div className="projectDetailHead3">COLLEGE WEBSITE</div>
            <div className="projectDetailLan3">
              <div>- HTML, CSS, JAVASCRIPT AND PYTHON LANGUAGE</div>
              <div>2022</div>{" "}
            </div>
            <div className="projectDetail3">
              This includes sections such as home page with news and
              announcements, an about us section highlighting the institution's
              history and mission, academic programs offered, admissions
              details, faculty and staff profiles, events calendar, and contact
              information.
            </div>
            <div className="projectbtn">
              <a className="projectbtnItem"  href="https://github.com/avinash1558/Projects/tree/main/Exam"
                target="_blank">
                Visit GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="projectBox4">
          <div className="projectImg4">
            <img src={project4} alt="img" />
          </div>
          <div className="projectDetailBox4">
            <div className="projectDetailHead4">AVINASH'S PORTFOLIO</div>
            <div className="projectDetailLan4">
              <div>- HTML, CSS AND REACT JS</div>
              <div>2023</div>{" "}
            </div>
            <div className="projectDetail4">
              A portfolio website is a unique way to showcase your work and let
              others know about yourself. It’s like an evergreen platform for
              your projects, case studies, and information about you. In
              addition, it’s one of the best ways to express... your
              personality, experience, and capabilities. Time to roll up your
              sleeves! Today we’re going to dive into the topic of portfolio
              websites and which industry experts should be using them. Learn
              how to create a good-looking site that uniquely showcases your
              work and the importance of doing so. You want visitors and
              potential clients to remember you for their next project.
            </div>
            <div className="projectbtn">
              <a className="projectbtnItem"  href="https://github.com/avinash1558/Projects/tree/main/portfolioavinash"
                target="_blank">
                Visit GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="projectBox5">
          <div className="projectImg5">
            <img src={project5}alt="img" />
          </div>
          <div className="projectDetailBox5">
            <div className="projectDetailHead5">DOT TECH</div>
            <div className="projectDetailLan5">
              <div>- HTML AND CSS</div>
              <div>2022</div>{" "}
            </div>
            <div className="projectDetail5">
              This website was for the competition of college dot tech
              festival. In which I got 3rd rank. This is a website made of
              complete HTML and CSS
            </div>
            <div className="projectbtn">
              <a className="projectbtnItem" href="https://github.com/avinash1558/Projects/tree/main/Avinash"
                target="_blank">
                Visit GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
