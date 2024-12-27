import React from 'react';
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience" id="experience">
            <div className="intro">
              <h1 style={{color: "var(--purple-color)"}}>Experience</h1>
                <div className="exp-container">
                  <div className="exp-info tab" id="sce">
                    <div id="time">05/2023 - 05/2024</div>
                    <div className="school">
                      <h3>Data Engineer Intern <span style={{color: "var(--red-color)"}}>@</span> <a style={{color: "var(--purple-color)"}} href="https://www.sce.com/" target="blank">Southern California Edison</a></h3>
                      <div className="add-info tab">Worked with the Information, Integration and Analytics Architecture (IIA) team on various aspects of data management, including data engineering and warehousing. Developed innovative features for the company's web application on asset management. Performed quality assurance on the quarterly asset report, resolving 3% of abnormal data. Researched existing APIs across different environments and developed a Python middleware to aggregate information retrieval patterns. Collaborated with the Application Development team to consume the deployed Python API in an end-to-end website integration.</div>
                      <div className="softwares tab">
                        <div id="software">Python</div>
                        <div id="software">Pandas</div>
                        <div id="software">Flask</div>
                        <div id="software">Elasticsearch</div>
                        <div id="software">Git</div>
                      </div>

                    </div>
                  </div>

                  <div className="exp-info tab" id="cpp-cos">
                    <div id="time">08/2023 - 05/2024</div>
                    <div className="school">
                      <h3>Research Assistant <span style={{color: "var(--red-color)"}}>@</span> <a style={{color: "var(--purple-color)"}} href="https://www.cpp.edu/sci/index.shtml" target="blank">Cal Poly Pomona, College of Science</a></h3>
                      <div className="add-info tab">Worked under the Human-Centered, Adaptive, and Personalized Information Interaction research lab (hapii), led by Dr. Ben Steichen, conducting a research study to investigate multilingual recommender systems. This involved collecting eye gaze information using a webcam with the OpenFace library and a Gazepoint eye tracker, then comparing and analyzing the collected data. Additionally, analyzed users' recommendation choices from the study to evaluate the multilingual search and recommender systems.</div>
                      <div className="softwares tab">
                        <div id="software">HTML</div>
                        <div id="software">CSS</div>
                        <div id="software">JavaScript</div>
                        <div id="software">MySQL</div>
                        <div id="software">Git</div>
                      </div>                    
                    </div>
                  </div>

                  <div className="exp-info tab" id="cpp-coe">
                    <div id="time">08/2022 - 05/2023</div>
                    <div className="school">
                      <h3>Research Assistant <span style={{color: "var(--red-color)"}}>@</span> <a style={{color: "var(--purple-color)"}} href="https://www.cpp.edu/engineering/index.shtml" target="blank">Cal Poly Pomona, College of Engineering</a></h3>
                      <div className="add-info tab">Collaborated with Aerospace Engineering students to develop an Obstacle Detection and Avoidance System for unmanned aerial vehicles (UAVs). This involved developing a visual sensor in Python capable of reading QR codes and adding location coordinates to them. The visual sensor was implemented on a Raspberry Pi camera, allowing the UAV to detect drop-off locations through scanning QR codes.</div>
                      <div className="softwares tab">
                        <div id="software">Python</div>
                        <div id="software">OpenCV</div>
                        <div id="software">NumPy</div>
                        <div id="software">Raspberry Pi</div>
                      </div> 
                    </div>
                  </div>

                  <div className="exp-info tab" id="usc">
                    <div id="time">05/2022 - 08/2022</div>
                    <div className="school">
                      <h3>Research Assistant <span style={{color: "var(--red-color)"}}>@</span> <a style={{color: "var(--purple-color)"}} href="https://viterbischool.usc.edu/" target="blank">USC, Viterbi School of Engineering</a></h3>
                      <div className="add-info tab">Worked with GLAMOR lab under Dr. Jesse Thomason on a command understanding system for embodied speech recognition. Developed a virtual agent in Python using AI2-THOR that parses language commands through template-based semantics and utilizes Levenshtein distance to handle spelling errors.</div>
                      <div className="softwares tab">
                        <div id="software">Python</div>
                        <div id="software">AI2-THOR</div>
                      </div> 
                    </div>
                  </div>

                </div>
            </div>
        </section>
  )
}

export default Experience