import { useState } from "react";

interface TabProps {
  tabs: string[]; // 탭 이름 배열
  selected: string; // 현재 선택된 탭
  onTabClick: (tab: string) => void; // 탭 클릭 시 실행되는 핸들러
}

export const Tab: React.FC<TabProps> = ({tabs, selected, onTabClick }) => {
  console.log("현재 선택된 탭 : ", selected);
  return (
    <div style={{display: "flex", gap: "8px"}}>
      {tabs.map((tab)=> (
        <button
          key={tab}
          onClick={() => 
           { console.log("클릭된 탭 : ", tab);
            onTabClick(tab);}}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            backgroundColor: selected === tab ? "#007BFF" : "#fff",
            color: selected === tab ? "#fff" : "#000",
            cursor: "pointer",
          }}
          >
            {tab}
          </button>
      ))}
    </div>
  )
}