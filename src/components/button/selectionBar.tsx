import { useEffect, useState } from "react";

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

  useEffect(() => {
    console.log("SelectionBar: selectedValue changed:", selectedValue);
    setSelected(selectedValue);
  }, [selectedValue]);

  const handleChange = (value: string) => {
    setSelected(value); // 상태 업데이트
    onSelect(value); // 상위 콜백 호출
  };

  return (
      <div 
        style={{ 
          marginTop: "10px",  
          display: "flex", 
          justifyContent: list.length === 2 ? "flex-start" : "space-between",
          gap: list.length === 2 ? "10px" : "10px",
        }}
      >
        {list.map((item) => (
          <div key={item.id} style={{ cursor: "pointer"}}>
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
                border: selected === item.value ? "1px solid #FF7920" : "1px solid #E8E8E8",
                borderRadius: "5px",
                // backgroundColor: selected === item.value ? "#f0f0f0" : "#fff",
                color: selected === item.value ? "#FF7920" : "#555",
                cursor: "pointer",
                width: '108px',
                textAlign : 'center'
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
