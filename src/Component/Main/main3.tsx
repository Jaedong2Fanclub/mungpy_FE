import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Main2_Container, Main2_P, Main2_P2} from './mainStyle';
import Button from "../Button/button";
import ButtonGroup from "../Button/personalityBtn";

const Main3 = () => {
    const navigator = useNavigate();

    function NextPage() {
        navigator("/loading");
    }
    return (  
        <Main2_Container>
            <Main2_P>마지막으로,</Main2_P>
            <Main2_P2>사용자님의 성향을 알려주세요!</Main2_P2>
            <ButtonGroup/>
            <div style={{marginTop: '157px'}}>
                <Button type="submit" variant={'NextBtn'} onClick={NextPage}>다음</Button>
            </div>
        </Main2_Container>
    )
}

export default Main3;