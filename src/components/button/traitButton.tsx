interface TraitButtonProps {
  trait: string;
  isSelected: boolean;
  onClick: () => void;
}

interface TraitSubmitButtonProps {
  isEnabled: boolean;
  onClick: () => void;
}

// 성향 선택 버튼
export function TraitButton({ trait, isSelected, onClick }: TraitButtonProps) {
  return (
      <button
          onClick={onClick}
          style={{
              width: "100px",
              height: "45px",
              padding: "10px 15px",
              borderRadius: "30px",
              fontSize: "15px",
              backgroundColor: "white",
              border: isSelected ? "1px solid #FF7920" : "1px solid #E4E4E4",
              color: isSelected ? "#FF7920" : "#C6C6C6",
              cursor: "pointer",
          }}
      >
          {trait}
      </button>
  );
}

// 선택완료 버튼
export function TraitSubmitButton({
  isEnabled,
  onClick,
}: TraitSubmitButtonProps) {
  return (
      <button
          className={isEnabled ? "active" : "inactive"}
          onClick={onClick}
          disabled={!isEnabled}
      >
          선택완료
      </button>
  );
}