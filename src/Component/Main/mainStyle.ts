import styled from "styled-components";
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
`

export const P = styled.p`
    font-size : ${fontSize.logoTitle};
    font-weight : 900;
`

export const SubTitle = styled.p`
    font-size : 25px;
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
    font-size : ${fontSize.small}
`

export const Grass = styled.div`
    width : 390px;
    height: 100px;
    background-repeat: no-repeat;
    background-image: url("image/longGrass.png");
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
    margin-top : 114px;
    margin-left: 9rem;
    font-weight: 900;
`

export const Main2_P2 = styled.p`
    font-size : ${fontSize.title};
    align-self: flex-start;
    margin-left: 9rem;
    margin-bottom : 133px;
    font-weight: 900;
`
