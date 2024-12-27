import React from 'react';
import "./Education.css";

const Education = () => {
  return (
    <div className="intro tab">
      <h2 style={{color: "var(--purple-color)"}}>Education</h2>
      <div className="edu-container">
        <div className="edu-info" id="ucla">
          <div>
            <h3>Certification in Data Science, 2025</h3>
            <div className="add-info tab">University of California, Los Angeles</div>
          </div>
        </div>

        <div className="edu-info" id="cpp">
          <div>
            <h3>Bachelor of Science in Computer Science, 2024</h3>
            <div className="add-info tab">California State Polytechnic University, Pomona</div>
          </div>
        </div>

        <div className="edu-info" id="elac">
          <div>
            <h3>Major in Computer Science, 2022</h3>
            <div className="add-info tab">East Los Angeles College</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Education