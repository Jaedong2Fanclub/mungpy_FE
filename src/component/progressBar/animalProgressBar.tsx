import React from "react";

interface ProgressBarProps {
  label: string;
  percentage: number;
}

const AnimalProgressBar: React.FC<ProgressBarProps> =({label, percentage}) => {
  return(
    <div style={{ display: "flex", alignItems: "center", marginBottom: "0.2rem"}}>
      <span  style={{ width: "60px", fontWeight: "600", fontSize: "14px" }}>{label}</span>
      {/* 프로그레스 바 */}
      <div
        style={{
          flex: 1,
          height: "10px",
          backgroundColor: "#FCE6D7",
          borderRadius: "5px",
          margin: "0 10px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${percentage}%`,
            backgroundColor: "#FF8C00",
            borderRadius: "5px",
            transition: "width 0.3s ease",
          }}
        />
      </div>
      <span style={{ fontWeight: "600", fontSize: "14px", color: "#555" }}>{percentage}%</span>
    </div>
  )
}

export default AnimalProgressBar;