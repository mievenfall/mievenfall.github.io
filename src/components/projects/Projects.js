import React from 'react';
import "./Projects.css";
import Resumate from "../../assets/img/resumate.png"
import Quizcraft from "../../assets/img/quizcraft.png"
import Squareup from "../../assets/img/squareup.png"
import Splitit from "../../assets/img/splitit.png"

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="intro tab">
        <h1 style={{color: "var(--purple-color)"}}>Projects</h1>
        <div className="proj-container">
          <a href="https://github.com/Vivian-Trieu/ResuMate/" target="blank">
          <div className="edu-info tab proj-info" id="resumate">
            <div id="proj-img"><img src={Resumate} alt="" className="proj__img" /></div>
            <div className="school proj">
              <h3>ResuMate</h3>
              <div className="add-info tab">Led the development of a web-based job-finding application as a Front-end Team Lead, overseeing a team of five. The project involved creating a user-friendly interface for resume uploads and job recommendations, utilizing ReactJS and AWS Amplify for hosting. Developed APIs via AWS API Gateway to link AWS Lambda Functions and manage data storage on AWS S3.</div>
              <div className="softwares tab">
                <div id="software">HTML</div>
                <div id="software">CSS</div>
                <div id="software">JavaScript</div>
                <div id="software">ReactJS</div>
                <div id="software">AWS</div>
                <div id="software">Git</div>
              </div>
            </div>
          </div></a>

          <a  href="https://github.com/mievenfall/QuizCraft-Web/" target="blank"><div className="edu-info tab proj-info" id="quizcraft">
            <div id="proj-img"><img src={Quizcraft} alt="" className="proj__img" /></div>
            <div className="school proj">
              <h3>QuizCraft</h3>
              <div className="add-info tab">Engineered a ReactJS application that integrates prompt engineering to interact with a Generative AI model via API, enabling detailed responses. The application also features a quiz component, where it processes the AI's output to generate questions and evaluates users' answers to present results. This involved intricate handling of user interactions and data formatting to ensure a dynamic and engaging quiz experience.</div>
              <div className="softwares tab">
                <div id="software">HTML</div>
                <div id="software">CSS</div>
                <div id="software">JavaScript</div>
                <div id="software">ReactJS</div>
                <div id="software">Dart</div>
                <div id="software">Git</div>
                <div id="software">OpenAI API</div>
              </div>
            </div>
          </div></a>

          <a  href="https://github.com/mievenfall/SQUARE-UP-Maze-Game/" target="blank"><div className="edu-info tab proj-info" id="squareup">
            <div id="proj-img"><img src={Squareup} alt="" className="proj__img" /></div>
            <div className="school proj">
              <h3>SQUARE UP - Maze Game</h3>
              <div className="add-info tab">Directed a team of five in crafting a strategic maze game. Applied object-oriented programming principles and Pygame for UI development, resulting in a seamless and engaging gameplay experience.</div>
              <div className="softwares tab">
                <div id="software">Python</div>
                <div id="software">Tkinter</div>
                <div id="software">Git</div>
              </div>
            </div>
          </div></a>

          <a  href="https://github.com/CP-AndriodDev/Split-it/" target="blank"><div className="edu-info tab proj-info" id="splitit">
            <div id="proj-img"><img src={Splitit} alt="" className="proj__img" /></div>
            <div className="school proj">
              <h3>Spit It</h3>
              <div className="add-info tab">Integrated UI designs into the Split-it project using Kotlin. Developed robust calculating functionalities to enhance performance and user experience. Collaborated closely with the team to improve overall quality and usability of the app.</div>
              <div className="softwares tab">
                <div id="software">Kotlin</div>
                <div id="software">Git</div>
                <div id="software">Yelp API</div>
              </div>
            </div>
          </div></a>
        </div>

        <div className="btn-container">
          <button className="more-proj btn-5">
            <a href="https://github.com/mievenfall/" target="_blank">
                <span className="resume">view more projects here</span>
            </a>
          </button>
          <span>|</span>
          <button className="project-portfo btn-5">
            <a href="https://mievenfall.github.io/portfolio/" target="_blank">
                <span className="resume">view project portfolio here</span>
            </a>
          </button>
        </div>
        

      </div>
    </section>
  )
}

export default Projects