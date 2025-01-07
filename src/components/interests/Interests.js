import React from 'react';
import "./Interests.css";

const Interests = () => {
  return (
    <div className="intro tab">
      <h2 style={{color: "var(--purple-color)"}}>Interests</h2>
      <div className="interest-container">
        <ul className="interest-list tab">
          <li>Machine Learning</li>
          <li>Natural Language Processing</li>
          <li>Computer Vision</li>
          <li>Data Analytics</li>
          <li>Cognitive Science</li>
        </ul>

      </div>
    </div>
  )
}

export default Interests