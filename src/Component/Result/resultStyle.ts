import styled from "styled-components";
import { fontSize } from "../../Styles/font";

export const P = styled.p`
    font-size : ${fontSize.title};
    align-self: flex-start; 
    margin-top : 114px;
    margin-left : 22px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`;

export const ImageWrapper = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 1rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const DogName = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
`;

export const Subtitle = styled.p`
    color: red;
    font-size: 0.8rem;
    margin-bottom: 1rem;
`;

export const Description = styled.p`
    font-size: 1rem;
    margin-bottom: 1rem;
`;

export const Divider = styled.hr`
    width: 80%;
    border: 1px solid #000;
    margin-bottom: 1rem;
`;

export const Bio = styled.p`
    font-size: 1rem;
    text-align: center;
    margin-bottom: 1rem;
`;

export const Heart = styled.span`
    font-size: 1.5rem;
    color: red;
`;