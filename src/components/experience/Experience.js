import React from 'react';
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience" id="experience">
            <div className="intro">
                <h2>Experience</h2>
                <div className="edu-container">
                  <div className="edu-info" id="sce">
                    <div id="time">05/2023 - 05/2024</div>
                    <div className="school">
                      <h3>Data Engineer Intern @ Southern California Edison</h3>
                      <div>Worked with the Information, Integration and Analytics Architecture (IIA) team on various aspects of data management, including data engineering and warehousing. Developed innovative features for the company's web application on asset management. Performed quality assurance on the quarterly asset report, resolving 3% of abnormal data. Researched existing APIs across different environments and developed a Python middleware to aggregate information retrieval patterns. Collaborated with the Application Development team to consume the deployed Python API in an end-to-end website integration.</div>
                    </div>
                  </div>

                  <div className="edu-info" id="cpp-cos">
                    <div id="time">08/2023 - 05/2024</div>
                    <div className="school">
                      <h3>Research Assistant @ Cal Poly Pomona, College of Science</h3>
                      <div>Worked under the Human-Centered, Adaptive, and Personalized Information Interaction research lab (hapii), led by Dr. Ben Steichen, conducting a research study to investigate multilingual recommender systems. This involved collecting eye gaze information using a webcam with the OpenFace library and a Gazepoint eye tracker, then comparing and analyzing the collected data. Additionally, analyzed users' recommendation choices from the study to evaluate the multilingual search and recommender systems.</div>
                    </div>
                  </div>

                  <div className="edu-info" id="cpp-coe">
                    <div id="time">08/2022 - 05/2023</div>
                    <div className="school">
                      <h3>Research Assistant @ Cal Poly Pomona, College of Engineering</h3>
                      <div>Collaborated with Aerospace Engineering students to develop an Obstacle Detection and Avoidance System for unmanned aerial vehicles (UAVs). This involved developing a visual sensor in Python capable of reading QR codes and adding location coordinates to them. The visual sensor was implemented on a Raspberry Pi camera, allowing the UAV to detect drop-off locations through scanning QR codes.</div>
                    </div>
                  </div>

                  <div className="edu-info" id="usc">
                    <div id="time">05/2022 - 08/2022</div>
                    <div className="school">
                      <h3>Visiting Research Assistant @ University of Southern California</h3>
                      <div>Worked with GLAMOR lab under Dr. Jesse Thomason on a command understanding system for embodied speech recognition. Developed a virtual agent in Python using AI2-THOR that parses language commands through template-based semantics and utilizes Levenshtein distance to handle spelling errors.</div>
                    </div>
                  </div>

                </div>
            </div>
        </section>
  )
}

export default Experience