import styled, {keyframes} from "styled-components";
import { fontSize } from "../../Styles/font";

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
        margin-top: 300px;
        padding-left: 0;
    }
`

export const P = styled.p`
    font-size : ${fontSize.logoTitle};
    font-weight : 900;
    color : white;
`

export const SubTitle = styled.p`
    font-size : 25px;
    color : white;
    margin-top: 1rem;
    margin-bottom: 25px;
`

export const Div = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
`

export const Img = styled.img`
    background-size : cover;
    width: 300px;
    height : 300px;
    background-position: center;
`

export const SmallP = styled.p`
    font-size : ${fontSize.small};
    color : white;
`

export const Grass = styled.div`
    width : 390px;
    height: 100px;
    background-repeat: no-repeat;
    background-image: url("image/longGrass.png");
    margin-top: 5rem;
`

export const Main2_Container = styled.div`
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
    margin-top: 10rem;
    
    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        padding: 10px;
    }
`

export const Main3_P = styled.p`
    font-size : ${fontSize.title};
    align-self: flex-start; 
    margin-top : 79px;
    margin-left : 22px;
    font-weight: 900;
`
export const Main3_P2 = styled.p`
    font-size : ${fontSize.title};
    align-self: flex-start; 
    margin-bottom : 45px;
    margin-left : 22px;
    font-weight: 900;
`

export const Main2_P = styled.p`
    font-size : ${fontSize.title};
    align-self: flex-start; 
    margin-left: 1.5rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
`

export const Main2_P2 = styled.p`
    font-size : ${fontSize.title};
    align-self: flex-start;
    margin-left: 1.5rem;
    margin-bottom : 50px;
    font-weight: 900;
`
const bounce = keyframes`
    0%{
        top: 20px;
    }
    100% {
        top: -20px;
        text-shadow: 0 1px 0 #CCC,
                    0 2px 0 #CCC,
                    0 3px 0 #CCC,
                    0 4px 0 #CCC,
                    0 5px 0 #CCC,
                    0 6px 0 #CCC,
                    0 7px 0 #CCC,
                    0 8px 0 #CCC,
                    0 9px 0 #CCC,
                    0 50px 25px rgba(0, 0, 0, .2)
    }
`

export const Span = styled.span<{delay : number}>`
    position: relative;
    top: 20px;
    display: inline-block;
    animation: ${bounce} 0.5s ease infinite alternate;
    animation-delay: ${props => props.delay}s;
    text-shadow: 0 1px 0 #CCC,
                0 2px 0 #CCC,
                0 3px 0 #CCC,
                0 4px 0 #CCC,
                0 5px 0 #CCC,
                0 6px 0 transparent,
                0 7px 0 transparent,
                0 8px 0 transparent,
                0 9px 0 transparent,
                0 10px 10px rgba(0, 0, 0, .4);
`

export const SubLabel = styled.div`
    text-align: left;
    color: #FF4E69;
    margin-top: 1rem;
    font-size: 12px;
`