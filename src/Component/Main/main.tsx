import React from "react";
import { useNavigate } from "react-router-dom";
import * as M from './mainStyle';
import Button from "../Button/button";

const MainPage = () => {
    const navigate = useNavigate();

    function NextPage() {
        navigate("/main2");
    }

    return (
        <M.Box>
            <M.Img src="/image/sfzLogo.png"/>
            <M.Div>
            <M.P>멍피</M.P>
                <M.SubTitle>나와 닮은 반려견을 찾아보아요!</M.SubTitle>
                <M.SmallP>나의 성향과 이미지를 반영한 반려견 알아보기</M.SmallP>
            </M.Div>
            <div style={{margin: '67px'}}>
                <Button type="submit" variant={'submitBtn'} onClick={NextPage}>시작하기</Button>
            </div>
            <div>
                <M.Grass/>
            </div>
        </M.Box>
    )
}

export default MainPage;