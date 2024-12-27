import React from 'react';
import CPP from "../../assets/img/cpp-logo.png"
import USC from "../../assets/img/usc-logo.png"
import SCE from "../../assets/img/sce-logo.png"
import UCLA from "../../assets/img/ucla-logo.png"
import "./About.css";
import Education from '../education/Education';
import Interests from '../interests/Interests';


const About = () => {
    return (
        <section className="about" id="about">
            <div className="intro">
                <h1 style={{color: "var(--purple-color)"}}>About me</h1>
                <div className="tab">I am a recent grad from <a style={{color: "var(--purple-color)"}} href="https://www.cpp.edu/" target="blank">California State Polytechnic University, Pomona<img src={CPP} alt="" className="logo" /></a> with a Bachelor's Degree in <strong>Computer Science</strong> and minoring in <strong>Data Science</strong>. My concentration was in <strong>Data Processing</strong>, which equipped me with a strong foundation in handling and analyzing large datasets. Additionally, I have a keen interest in <strong>Machine Learning</strong>, which complements my data processing skills.</div>
                <div className="tab">During my academic journey, I was fortunate to intern at <a style={{color: "var(--purple-color)"}} href="https://www.sce.com/" target="blank">Southern California Edison<img src={SCE} alt="" className="logo" /></a> in 2023 as a <strong>Data Engineer</strong>, where I honed my skills in <strong>data processing and manipulation</strong>. Furthermore, I worked as a <strong>Visiting Research Assistant</strong> with <a style={{color: "var(--purple-color)"}} href="https://jessethomason.com/" target="blank">Dr. Jesse Thomason</a> at the <a style={{color: "var(--purple-color)"}} href="https://www.usc.edu/" target="blank">University of Southern California<img src={USC} alt="" className="logo" /></a> in 2022, which sparked my interest in <strong>Machine Learning</strong>.</div>
                <div className="tab">I am currently working toward my <strong>Data Science Certificate</strong> at <a style={{color: "var(--purple-color)"}} href="https://www.uclaextension.edu/" target="blank">University of California, Los Angeles<img src={UCLA} alt="" className="logo" /></a>, which was generously supported by <a style={{color: "var(--purple-color)"}} href="https://www.uclaextension.edu/uclaxcareerbridge" target="blank">UCLAxCareerBridge</a>, and expected to finish by 2025. </div>
                <div className="tab note"># As a <a style={{color: "var(--purple-color)"}} href="https://stemadvantage.org/" target="blank">STEM Advantage Alumni</a> and <a style={{color: "var(--purple-color)"}} href="https://www.codepath.org/" target="blank">CodePath Alumni</a>, I am grateful for all the opportunities I have had, which have contributed to my growth and development.</div>
                <div className="others">
                    <div id="interests">
                        <Interests />
                    </div>
                    <div id="blank-gap"></div>
                    <div id="education">
                        <Education />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About