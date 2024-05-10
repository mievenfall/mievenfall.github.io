import React from 'react';
import "./Education.css";

const Education = () => {
  return (
    <section className="education" id="education">
            <div className="intro">
                <h2>Education</h2>
                <div className="edu-container">
                  <div className="edu-info" id="ucla">
                    <div id="time">2024 - Current</div>
                    <div className="school">
                      <h3>University of California, Los Angeles</h3>
                      <div>Data Science Certificate</div>
                    </div>
                  </div>

                  <div className="edu-info" id="cpp">
                    <div id="time">2022 - 2024</div>
                    <div className="school">
                      <h3>California State Polytechnic University, Pomona</h3>
                      <div>Bachelor of Science in Computer Science, Minor in Data Science</div>
                    </div>
                  </div>

                  <div className="edu-info" id="elac">
                    <div id="time">2020 - 2022</div>
                    <div className="school">
                      <h3>East Los Angeles College</h3>
                      <div>Major in Computer Science</div>
                    </div>
                  </div>

                </div>
            </div>
        </section>
  )
}

export default Education