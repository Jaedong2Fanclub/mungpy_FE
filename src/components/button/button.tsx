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
            background: ${Color.btnColor};
            font-size : ${fontSize.mid};
            width : 315px;
            height : 57px;
            border-radius : 100px;
            font-weight: 700;
            color : ${Color.main};
        `
    }
    ${props =>
        props.variant === 'NextBtn' &&
        css`
            background: ${Color.main};
            font-size : ${fontSize.mid};
            width : 90%;
            height : 57px;
            border-radius : 100px;
            font-weight: 700;
            margin-bottom: 2rem;
            color : ${Color.btnColor};
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
            background: ${Color.main};
            font-size : ${fontSize.small};
            width : 100%;
            height : 60px;
            border-radius : 12px;
            font-weight: 700;
            margin-bottom: 2rem;
            color : white;
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
    ${props =>
        props.variant === 'filled' &&
        css`
            width: 167px;
            height: 57px;
            background-color: #ff7920; // 주황색
            color: white;
            border: none;
            border-radius: 100px;
            font-weight: 700;
        `
    }
    ${props =>
        props.variant === 'outlined' &&
        css`
            width: 167px;
            height: 57px;
            background-color: white;
            color: #ff7920;
            border: 2px solid #ff7920;
            border-radius: 100px;
            font-weight: 700;
        `
    }
`

const Button: FC<ButtonProps> = ({onClick, children, type ,variant, ...props}) => {
    return (
        <>
            <Btn type={type} onClick={onClick} variant={variant} {...props}>
                {children}
            </Btn>
        </>
    )
}

export default Button;