import styled from "styled-components";
import { fontSize } from "../../Styles/font";
import { Color } from "../../Styles/color";

export const P = styled.p`
    font-size : ${fontSize.title};
    font-weight: 900;
    align-self: flex-start; 
    margin-top : 114px;
    margin-bottom : 42px;
`

export const Container = styled.div`
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
    }
`;

export const ImageWrapper = styled.div`
    width: 350px;
    border-radius: 10%;
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
    color: #FF4E69;
    font-size: 0.8rem;
    margin-bottom: 1rem;
`;

export const Description = styled.p`
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 25px;
    margin-top: 1rem;
`;

export const Divider = styled.hr`
    width: 80%;
    border: 1px solid #000;
    margin-bottom: 1rem;
`;

export const Bio = styled.p`
    font-size: 1rem;
    text-align: center;
    width: 350px;
    margin-top: 1rem;
`;

export const Heart = styled.span`
    font-size: 1.5rem;
    color: red;
`;

// 여기부터는 디테일 페이지 스타일
export const D_Container = styled.div`
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
    }
`;

export const Title = styled.p`
    color: #007BFF;
    border: 2px solid #007BFF;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    margin-bottom: 34px;
    font-size: ${fontSize.small};
    font-weight: bold;
    justify-content: center;
`;

export const Image = styled.img`
    width: 350px;
    border-radius: 10%;
    object-fit: cover;
    margin-bottom: 20px;
`;

export const Info = styled.div`
    margin: 10px 0;
    font-size: 18px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const InfoLabel = styled.span`
    font-weight: bold;
`;

export const TagContainer = styled.div`
    margin-top: 20px;
    width: 400px;
`;

export const Tag = styled.span<{ bgColor?: string }>`
    display: inline-block;
    background-color : none;
    border : 1px solid ${Color.hover};
    color: ${Color.hover};
    padding: 5px 10px;
    border-radius: 5px;
    margin: 5px;
    font-size: 14px;
`;

export const SexImage = styled.img `
    width: 20px;
    height: 20px;
`

export const DogDiv = styled.div`
        display: flex;
    flex-direction: column;
    /* align-items: center; */
    margin-left: 29px;
    text-align: left;
`

export const DogContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const LabelDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
`

export const CenterDiv = styled.div`
    margin-top : 2rem;

`

export const ShareImg = styled.img`
    width: 20px;
    height: 20px;
`