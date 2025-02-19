import React, { useEffect, useState } from "react";
import arrow from '../../img/arrow.png';
import { Box, Input, InputDiv,Name,HeaderDiv,SubLabel } from "./style";
import Button from "../button/button";
import { useLocation, useNavigate } from "react-router-dom";
import Dropdown from "../dropdown/dropdown";

const options = [
        {name : "제주 동물보호센터", address: "제주특별자치도 제주시 첨단동길 184-14 (용강동)"},
        {name : "제주 동물보호센터", address: "제주특별자치도 제주시 첨단동길 184-14 (용강동)"},
        {name : "제주 동물보호센터", address: "제주특별자치도 제주시 첨단동길 184-14 (용강동)"},
        {name : "제주 동물보호센터", address: "제주특별자치도 제주시 첨단동길 184-14 (용강동)"},
    ]

const AnimalRegister = ()=> {
    const navigate = useNavigate();
    const location = useLocation();
    const [title, setTitle] = useState('강아지 등록');
    const [selectedCenter, setSelectedCenter] = useState('');

    useEffect(() => {
        if (location.state && location.state.type) {
            setTitle(location.state.type);
        }
    }, [location]);

    function Res() {
        navigate('/')
    }

    const handleSelect = (name: string, address: string) => {
        setSelectedCenter(`${name}: ${address}`);
    };

    return (
        <Box>
            <HeaderDiv>
                <div><img src={arrow}/></div>
                <Name>{title}</Name>
            </HeaderDiv>
            <InputDiv>
                <Input placeholder="강아지 이름"/>
                <Input placeholder="구조자 성함"/>
                <Input placeholder="구조된 장소"/>
                <Input placeholder="털 색상"/>
                <Input placeholder="연락처"/>
            </InputDiv>
            <Dropdown options={options} onSelect={handleSelect} />
            <div>{selectedCenter}</div>
            <SubLabel>보호소를 등록하고 싶으신가요?</SubLabel>
            <div style={{ marginTop: '10rem' }}>
                <Button type="submit" variant={'submit'} onClick={Res}>등록하기</Button>
            </div>
        </Box>
    )
}

export default AnimalRegister;