import { useState } from "react";

interface SelectionItem {
  id: string;
  name: string;
  value: string;
}

interface SelectionBarProps {
  list: SelectionItem[]; // 선택 항목 배열
  selectedValue?: string; // 초기 선택값
  onSelect: (value: string) => void; // 값 선택 시 호출되는 함수
  name: string; // 라디오 그룹 이름
}

const SelectionBar: React.FC<SelectionBarProps> = ({ list, selectedValue = "", onSelect, name }) => {
  const [selected, setSelected] = useState<string>(selectedValue);

  const handleChange = (value: string) => {
    setSelected(value); // 상태 업데이트
    onSelect(value); // 상위 콜백 호출
  };

  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px" }}>
      {list.map((item) => (
        <div key={item.id} style={{ cursor: "pointer" }}>
          <input
            type="radio"
            id={`${name}-${item.id}`} // 고유 id 생성
            name={name} // 라디오 그룹 이름 지정
            value={item.value}
            checked={selected === item.value}
            onChange={(e) => handleChange(e.target.value)}
            style={{ position: "absolute", opacity: 0 }}
          />
          <label
            htmlFor={`${name}-${item.id}`}
            style={{
              display: "inline-block",
              padding: "10px 20px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: selected === item.value ? "#f0f0f0" : "#fff",
              color: selected === item.value ? "#000" : "#555",
              cursor: "pointer",
            }}
          >
            {item.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default SelectionBar;
