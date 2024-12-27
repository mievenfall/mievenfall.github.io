// src/components/loading/LoadingCircle.js

import React from 'react';
import './LoadingCircle.css';
import Me from "../../assets/img/profile-pic.png"


const LoadingCircle = () => {
  return (
    <div className="loading-container">
      <div className="circle-outline">
        <svg width="100" height="100" className="circle-svg">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#8899FC"
            strokeWidth="4"
            className="circle-path"
          />
        </svg>
        <div className="dot"></div>
      </div>
      <div className="circle-fill"></div>
      <div className="image-container">
        <img src={Me} alt="Your Image" className="spinning-image" />
      </div>
    </div>
  );
};

export default LoadingCircle;
