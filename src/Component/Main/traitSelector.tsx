import React, { useEffect, useState } from "react";
import { TraitButton } from "../Button/traitButton";
import "../../Styles/traitSelector.scss";
import Button from "../Button/button";

const traits = [
    "사교적인",
    "낙관적",
    "예민보스",
    "돈감각체",
    "의존적",
    "알잘딱깔센",
    "독고다이",
    "독립적",
    "에너자이저",
    "도도시크",
    "조용함",
    "집순이",
    "활발함",
    "말수없음",
];

interface TraitSelectorProps {
    onNext: (additionalData: any) => Promise<void>;
  }

const TraitSelector:React.FC<TraitSelectorProps> = ({onNext}) => {
    const [selectedTraits, setSelectedTraits] = useState<string[]>([]);

    // 성향 토글 함수
    const toggleTrait = (trait: string) => {
        if(selectedTraits.length >= 5 && !selectedTraits.includes(trait)) {
            alert('최대 5개까지만 선택할 수 있습니다!');
            return;
        }
        setSelectedTraits(
            (prev) =>
                prev.includes(trait)
                    ? prev.filter((t) => t !== trait) // 선택 해제
                    : [...prev, trait] // 선택 추가
        );
    };

    // 성향 제출 함수
    const handleNext = () => {
        if(selectedTraits.length === 0) {
            alert("한개 이상 선택해주세요!");
            return;
        }
        onNext({selectedTraits});
        console.log("성향 선택 : ",selectedTraits);
    };

    return (
        <div className="trait-selector">
            <div className="traits-container">
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "20px",
                    }}
                >
                    {traits.map((trait) => (
                        <TraitButton
                            key={trait}
                            trait={trait}
                            isSelected={selectedTraits.includes(trait)}
                            onClick={() => toggleTrait(trait)}
                        />
                    ))}
                </div>
            </div>
            <Button type="submit" variant={'NextBtn'} onClick={handleNext}>다음</Button>
        </div>
    );
}

export default TraitSelector;