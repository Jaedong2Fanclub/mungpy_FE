import styled from "styled-components";
import { fontSize } from "../../Styles/font";

export const Box = styled.div`
    display : flex;
    align-items: center;
    flex-direction: column; 
    flex-wrap: wrap;
`

export const P = styled.p`
    font-size : ${fontSize.logoTitle};
    font-weight : bold;
`

export const SubTitle = styled.p`
    font-size : ${fontSize.subTitle};
    margin-bottom : 25px;
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
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`


export const Main2_P = styled.p`
    font-size : ${fontSize.title};
    align-self: flex-start; 
    margin-top : 114px;
    margin-left : 22px;
`

export const Main2_P2 = styled.p`
    font-size : ${fontSize.title};
    align-self: flex-start;
    margin-left : 22px;
    margin-bottom : 133px;
`
