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
            margin-bottom: 2rem;
        `
    }
    ${props =>
        props.variant === 'HomeBtn' &&
        css`
            background: ${Color.hover};
            font-size : ${fontSize.title};
            width : 240px;
            height : 68px;
            border-radius : 10px;
            font-weight: 900;
            margin-top: 2rem;
        `
    }
    ${props =>
        props.variant === 'ShareBtn' &&
        css`
            border: 2px solid #525CEB;
            background: none;
            width : 84px;
            height : 68px;
            border-radius : 10px;
            font-weight: 900;
            margin-left: 16px;
            margin-top: 2rem;
        `
    }
    ${props =>
        props.variant === 'registrationBtn' &&
        css`
            background: none;
            width : 162px;
            height : 56px;
            border-radius : 10px;
            font-weight: 900;
            margin-left: 16px;
            margin-top: 2rem;
            background: ${Color.hover};
            font-size : ${fontSize.title};
        `
    }
    ${props =>
        props.variant === 'submit' &&
        css`
            display: flex;
            border: none;
            color: #ffffff;
            align-items: center;
            border-radius: 5px;
            cursor: pointer;
            background: #525CEB;
            font-size: 25px;
            width: 550px;
            height: 56px;
            border-radius: 10px;
            font-weight: 900;
            justify-content: center;
            margin-left: 2rem;
        `
    }
    ${props =>
        props.variant === 'animationBtn' &&
        css`
            background-color : transparent;
            font-size : ${fontSize.logoTitle};
            width : 200px;
            height : 56px;
            border-radius : 10px;
            font-weight: 900;
        `
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