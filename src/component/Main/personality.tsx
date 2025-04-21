import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Main2_Container, Main2_P, SubLabel} from './mungpy/mainStyle';
import Button from "../button/button";
import ButtonGroup from "../button/personalityBtn";

const Personality:React.FC = () => {
    const navigator = useNavigate();
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleNext = () => {
        if(selectedOptions.length === 5){
            alert("양자택일로 선택해주세요!");
            return;
        }
        console.log(selectedOptions);
        navigator('/porfile', {state: {selectedOptions}});
    }
    return (  
        <Main2_Container>
            <Main2_P>먼저,</Main2_P>
            <Main2_P>사용자님의 성향을 체크해주세요!</Main2_P>
            <SubLabel>메이트를 고르는데 중요해요</SubLabel>
            <ButtonGroup selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>
            <div style={{marginTop: '96px'}}>
                <Button type="submit" variant={'NextBtn'} onClick={handleNext}>다음</Button>
            </div>
        </Main2_Container>
    )
}

export default Personality;