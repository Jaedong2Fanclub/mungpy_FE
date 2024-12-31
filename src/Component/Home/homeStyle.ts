import styled from "styled-components";
import { Color } from '../../Styles/color';

export const Box = styled.div`
    width: 390px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: auto;
    min-height: calc(100vh - 350px);
    //@media (max-width: 768px) {
    //    width: 90%;
    //    height: 100%;
    //    padding: 10px;
    //}
`

export const SectionWrapper = styled.div`
    width: 100%;
`

export const SectionFirst = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    font-weight: 700;
    font-size: large;
`

export const SectionSecond = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    
`

export const SearchSection = styled.section`
    border: 1px solid #E9E9E9;
    border-radius: 10px;
    margin: 10px;
    width: 160px;
    padding: 10px;
    height: 175px;
`

export const SectionSecondP = styled.p`
    text-align: left;
    margin: 0.5rem;
`

export const Img = styled.img`
    width: 78px;
    height: 82px;
    position: relative;
    left: 40px;
    bottom: -40px;
`

export const Img2 = styled.img`
    width: 121px;
    height: 81px;
    position: relative;
    left: 20px;
    bottom: -60px;
`

export const SectionThird = styled.section`
    display: flex;
    flex-direction: row;
    margin: 1rem;
    align-items: flex-end;
    font-size: 14px;
    font-weight: bold;
`

export const Img3 = styled.img`
    width: 18px;
    height: 20px;
`

export const Section3P = styled.p`
    padding-left: 0.5rem;
`
