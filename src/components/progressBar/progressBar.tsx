import React from "react";
import runDog from "../../img/progressDog.png"
import './style.scss'

interface progressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<progressBarProps> = ({ progress }) => {
  const progressStyle = {
    width: `${progress}%`,
    transition: 'width 0.5s ease-in-out'
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={progressStyle}>
        <img src={runDog} className="progress-dog"/>
      </div>
    </div>
  )
}