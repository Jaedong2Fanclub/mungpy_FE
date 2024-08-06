import React, {FC} from "react";
import { ButtonProps } from "../../constants/interface";
import styled, {css} from "styled-components"
import { Color } from "../../Styles/color";
import { fontSize } from "../../Styles/font"

const Btn = styled.button<ButtonProps>`
    display: flex;
    height: 33px;
    width: 100%;
    border: none;
    color : #ffffff;
    font-size : ${fontSize.small};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor : pointer;
    ${props =>
        props.variant === 'submitBtn' &&
        css`
            background: ${Color.hover};
            font-size : ${fontSize.title};
            width : 200px;
            height : 56px;
            border-radius : 10px;
            font-weight: 900;
        `
    }
    ${props =>
        props.variant === 'NextBtn' &&
        css`
            background: ${Color.hover};
            font-size : ${fontSize.title};
            width : 340px;
            height : 68px;
            border-radius : 10px;
            font-weight: 900;
        `
    }
    & :hover{
        background : ${Color.hover}
    }
`

const Button: FC<ButtonProps> = ({onClick, children, type = "button",variant, ...props}) => {
    return (
        <>
            <Btn type={type} onClick={onClick} variant={variant} {...props}>
                {children}
            </Btn>
        </>
    )
}

export default Button;