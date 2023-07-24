import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./circularProgressBar.css";

function CircularProgressBar() {
  const [percentage, setPercentage] = useState(0);
  const [creativitypercentage, setCreativitypercentage] = useState(0);
  const [communicationpercentage, setCommunicationpercentage] = useState(0);
  const [problemsolvingpercentage, setProblemsolvingpercentage] = useState(0);
  const [teamworkpercentage, setTeamworkpercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 100) {
        setPercentage(percentage + 5);
      }
    }, 100);

    setTimeout(() => {
      if (creativitypercentage < 80) {
        setCreativitypercentage(creativitypercentage + 5);
      }
    }, 100);
    setTimeout(() => {
      if (communicationpercentage < 50) {
        setCommunicationpercentage(communicationpercentage + 5);
      }
    }, 100);
    setTimeout(() => {
      if (problemsolvingpercentage < 75) {
        setProblemsolvingpercentage(problemsolvingpercentage + 5);
      }
    }, 100);
    setTimeout(() => {
      if (teamworkpercentage < 70) {
        setTeamworkpercentage(teamworkpercentage + 5);
      }
    }, 100);
  }, [
    percentage,
    creativitypercentage,
    communicationpercentage,
    problemsolvingpercentage,
    teamworkpercentage,
  ]);

  return (
    <>
      <div className="homeSkillbox">
        <div className="techskillbox">
          <div className="Tech-Skill">
            <span>Technical</span> Skills
          </div>

          <div className="Python fontSize">
            <div>
              <div className="Pythonhead marginL">Python</div>
              <div className="Pythonicon">
                <iconify-icon icon="logos:python"></iconify-icon>
              </div>
            </div>
            <div className="Pythonpercentage">
              <progress id="file" value="80" max="100"></progress>
            </div>
          </div>

          <div className="javasrcipt fontSize">
            <div>
              <div className="javasrcipthead marginL">javasrcipt</div>
              <div className="javasrcipticon">
                <iconify-icon icon="skill-icons:javascript"></iconify-icon>
              </div>
            </div>
            <div className="javasrciptpercentage">
              <progress id="file" value="70" max="100">
                {" "}
                32%{" "}
              </progress>
            </div>
          </div>
          <div className="react fontSize">
            <div>
              <div className="reacthead marginL">react js</div>
              <div className="reacticon">
                <iconify-icon icon="vscode-icons:file-type-reactjs"></iconify-icon>
              </div>
            </div>
            <div className="reactpercentage">
              <progress id="file" value="70" max="100">
                {" "}
                32%{" "}
              </progress>
            </div>
          </div>
          <div className="express fontSize">
            <div>
              <div className="expresshead marginL">expres js</div>
              <div className="expressicon">
                <iconify-icon icon="vscode-icons:file-type-reactjs"></iconify-icon>
              </div>
            </div>
            <div className="expresspercentage">
              <progress id="file" value="60" max="100">
                {" "}
                32%{" "}
              </progress>
            </div>
          </div>

          <div className="html fontSize">
            <div>
              <div className="htmlhead marginL">html</div>
              <div className="htmlicon">
                <iconify-icon icon="logos:html-5"></iconify-icon>
              </div>
            </div>
            <div className="htmlpercentage">
              <progress id="file" value="70" max="100">
                {" "}
                32%{" "}
              </progress>
            </div>
          </div>
          <div className="css fontSize">
            <div>
              <div className="csshead marginL">css</div>
              <div className="cssicon">
                <iconify-icon icon="logos:css-3"></iconify-icon>
              </div>
            </div>
            <div className="csspercentage">
              <progress id="file" value="74" max="100">
                {" "}
                32%{" "}
              </progress>
            </div>
          </div>
          <div className="java fontSize">
            <div>
              <div className="javahead marginL">java</div>
              <div className="javaicon">
                <iconify-icon icon="logos:java"></iconify-icon>
              </div>
            </div>
            <div className="javapercentage">
              <progress id="file" value="68" max="100">
                {" "}
                32%{" "}
              </progress>
            </div>
          </div>
          <div className="android fontSize">
            <div>
              <div className="androidhead marginL">Android</div>
              <div className="androidicon">
                <iconify-icon icon="devicon:android"></iconify-icon>
              </div>
            </div>

            <div className="androidpercentage">
              <progress id="file" value="60" max="100">
                {" "}
                32%{" "}
              </progress>
            </div>
          </div>
        </div>
        <div className="practicalSkill">
          <div className="Practical-Skill">
            <span>Professional</span> Skills
          </div>

          <div className="box1">
            <div className="creativity columnflex">
              <div className="creativityHead Fontsize">Creativity</div>
              <div className="creativityPercentage percentage">
                <CircularProgressbar
                  value={creativitypercentage}
                  text={`${creativitypercentage}%`}
                />
              </div>
            </div>

            <div className="communication columnflex">
              <div className="communicationHead Fontsize">
                Communication Skill
              </div>
              <div className="communicationpercentage percentage">
                <CircularProgressbar
                  value={communicationpercentage}
                  text={`${communicationpercentage}%`}
                />
              </div>
            </div>
          </div>
          <div className="box2">
            <div className="problemsolving columnflex">
              <div className="problemsolvingHead Fontsize">Problem Solving</div>
              <div className="roblemsolvingpercentage percentage">
                <CircularProgressbar
                  value={problemsolvingpercentage}
                  text={`${problemsolvingpercentage}%`}
                />
              </div>
            </div>
            <div className="teamwork columnflex">
              <div className="teamworkHead Fontsize">Team Work</div>
              <div className="teamworkpercentage percentage">
                <CircularProgressbar
                  value={teamworkpercentage}
                  text={`${teamworkpercentage}%`}
                  color="red"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CircularProgressBar;
