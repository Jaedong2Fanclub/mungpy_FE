import styled from "styled-components";
import { Color } from '../../../Styles/color';

export const ProfileUploadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`

export const ProfiledUpload = styled.div`
    width: 230px;
    height: 230px;
    border-radius: 50%;
    border : 1px solid ${Color.hover};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Span = styled.span`
    color : ${Color.hover};
`