import styled from "styled-components";
import { Color } from '../../Styles/color';

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

export const Img = styled.img`
    border: none;
    margin-top : 2rem;
    width : 600px;
    height : 400px;
`

export const SubImg = styled.img`
    z-index: 2;
    margin-top: 28rem;
    position: absolute;
`

export const DogImg = styled.img`
    width: 100px;
    height: 90px;
    margin-right: 2rem;
    margin-top: 1rem;
    border-radius: 10px;
    box-shadow: 0 0 10px;
`

export const Title = styled.div`
    font-size: 25px;
    font-weight: 900;
    margin-top: 3rem;
    text-align: left;
    display: flex;
`

export const List = styled.div`
    margin-top: 1rem;
    border: 1px solid ${Color.hover};
    border-radius: 10px;
    width: 600px;
`

export const ListItem = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
    margin-top: 1rem;
`