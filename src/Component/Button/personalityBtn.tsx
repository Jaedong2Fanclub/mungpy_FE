import React, { useEffect, useState } from "react";
import styled, {css} from "styled-components";
import { PersonalityOptions } from "../../constants/personailty";
import { Color } from "../../Styles/color";
import { ButtonGroupProps } from "../../constants/interface";

const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 0.5rem;
`;

const Button1 = styled.button<{ selected: boolean }>`
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


const ButtonGroup: React.FC<ButtonGroupProps> = ({selectedOptions, setSelectedOptions}: any) => {
    const handleClick = (option: string, oppositeOption: string) => {
        setSelectedOptions((prev:any) =>
        prev.includes(option)
            ? prev.filter((item:any) => item !== option)
            : [...prev.filter((item:any) => item !== oppositeOption), option]
        );
    };

    return (
        <ButtonContainer>
            {PersonalityOptions.map(([left, right]) => (
                <React.Fragment key={left + right}>
                <Button1
                    onClick={() => handleClick(left, right)}
                    selected={selectedOptions.includes(left)}
                >
                    {left}
                </Button1>
                <Button1
                    onClick={() => handleClick(right, left)}
                    selected={selectedOptions.includes(right)}
                >
                    {right}
                </Button1>
                </React.Fragment>
            ))}
        </ButtonContainer>
    );
};

export default ButtonGroup;