import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as M from './mainStyle';
import Button from "../Button/button";
import Background from "../Loading/background";

const MainPage = () => {
    const navigate = useNavigate();
    const txt = "나의 성향과 이미지를 반영한 유기견 알아보기";
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);
    const start = "start";

    useEffect(() => {
        const interval = setInterval(() => {
            setText(prevText => prevText + txt[count]);
            setCount(prevCount => prevCount+1);
        },100);

        if(count === txt.length){
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    },[count, txt]);

    function NextPage() {
        navigate("/personality");
    }

    return (
        <M.Box>
            <Background/>
            <M.Div>
            <M.P>MUNGPY</M.P>
                <M.SmallP>{text}</M.SmallP>
            </M.Div>
            <div style={{margin: '67px'}}>
                <Button type="submit" variant={'animationBtn'} onClick={NextPage}>
                    {start.split('').map((char, index) => (
                        <M.Span key={index} delay={index * 0.1}>{char}</M.Span>
                    ))}
                </Button>
            </div>
        </M.Box>
    )
}

export default MainPage;