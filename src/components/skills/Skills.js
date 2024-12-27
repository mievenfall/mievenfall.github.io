import React from 'react';
import "./Skills.css";

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="intro tab">
                <h2><span style={{color: "var(--red-color)"}}>def </span> <span style={{color: "var(--purple-color)"}}>skills</span>(self):</h2>
                <div className="edu-container">
                  <div className="edu-info tab" id="lang">
                    <div id="time">Languages:</div>
                    <div className="school">
                      <div>Python, R, C/C++, Java, HTML, CSS, JavaScript, Dart, Kotlin.</div>
                    </div>
                  </div>

                  <div className="edu-info tab" id="db">
                    <div id="time">Databases:</div>
                    <div className="school">
                      <div>MySQL, PostgreSQL, MongoDB, elasticsearch.</div>
                    </div>
                  </div>

                  <div className="edu-info tab" id="elac">
                    <div id="time">Frameworks:</div>
                    <div className="school">
                      <div>scikit-learn, Tensorflow, PyTorch, Flask, React, Flutter.</div>
                    </div>
                  </div>

                  <div className="edu-info tab" id="elac">
                    <div id="time">Tools:</div>
                    <div className="school">
                      <div>Microsoft 365, Git, AWS, Postman, Jupyter Notebook, VS Code, PyCharm, Google Colab, Replit, Android Studio.</div>
                    </div>
                  </div>

                </div>
            </div>
        </section>
    )
}

export default Skills
