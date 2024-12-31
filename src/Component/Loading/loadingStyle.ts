import styled, {keyframes} from "styled-components";
import {FaCheck} from 'react-icons/fa';
import { fontSize } from "../../Styles/font";

const dotAnimation = keyframes`
    0%, 80%, 100% {
        transform: scale(0);
    }
    40% {
        transform: scale(1);
    }
`;

export const Box = styled.div`
    width: 600px;
    height: 800px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 20px;
    margin: 20px auto;
    text-align: center;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        width: 90%;
        height: 100%;
        padding: 10px;
        padding-left: 0;
    }
`

export const P = styled.p`
    font-size : ${fontSize.title};
    margin-top : 200px;
    font-weight: 900;
    text-align: center;
    align-items: center;
`

export const SubDiv = styled.div`
    display : flex;
    flex-direction: row;
    align-items: center;
    place-items: center;
    font-size : ${fontSize.title};
    margin-left : 73px;
    margin-bottom : 116px;
    font-weight: 900;
`

export const Img = styled.img`
    width: 4rem;
    height : 4rem;
    margin-left : 0.5rem;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
`

export const LoadingDots = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CheckIcon = styled(FaCheck)`
    width: 24px;
    height: 24px;
`;

export const DotWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60px;
`;

export const Circle = styled.div<{ success: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: ${(props) => (props.success ? '#E6F0FF' : '#FFB0BC')};
    color: ${(props) => (props.success ? '#27ae60' : '#3498db')};
`;

export const Dot = styled.div`
    width: 8px;
    height: 8px;
    margin: 0 2px;
    background-color: #3498db;
    border-radius: 50%;
    display: inline-block;
    animation: ${dotAnimation} 1.4s infinite ease-in-out both;
`;