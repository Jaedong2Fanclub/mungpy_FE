import React, { useState } from "react";
import styled, {css} from "styled-components";
import { PersonalityOptions } from "../../constants/personailty";
import { Color } from "../../Styles/color";

const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 20%;
`;

const Button = styled.button<{ selected: boolean }>`
    display: flex;
    height: 46px;
    width: 140px;
    border: 1px solid ${Color.hover};
    color: ${Color.hover};
    font-size: 1rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    border-radius: 5px;
    cursor: pointer;
    background: none;

    ${(props) =>
        props.selected &&
        css`
        background: ${Color.hover};
        color: white;
    `}
`;


const ButtonGroup: React.FC= () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

const handleClick = (option: string, oppositeOption: string) => {
    setSelectedOptions((prev) =>
    prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev.filter((item) => item !== oppositeOption), option]
    );
};
return (
    <ButtonContainer>
        {PersonalityOptions.map(([left, right]) => (
            <React.Fragment key={left + right}>
            <Button
                onClick={() => handleClick(left, right)}
                selected={selectedOptions.includes(left)}
            >
                {left}
            </Button>
            <Button
                onClick={() => handleClick(right, left)}
                selected={selectedOptions.includes(right)}
            >
                {right}
            </Button>
            </React.Fragment>
        ))}
        </ButtonContainer>
    );
};

export default ButtonGroup;