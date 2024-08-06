import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Main2_Container, Main2_P, Main2_P2} from './mainStyle';
import Button from "../Button/button";
import ButtonGroup from "../Button/personalityBtn";

const Main3:React.FC = () => {
    const navigator = useNavigate();
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleNext = () => {
        if(selectedOptions.length === 5){
            alert("양자택일로 선택해주세요!");
            return;
        }
        console.log(selectedOptions);
        navigator('/main2', {state: {selectedOptions}});
    }
    return (  
        <Main2_Container>
            <Main2_P>먼저,</Main2_P>
            <Main2_P2>사용자님의 성향이 궁금해요!</Main2_P2>
            <ButtonGroup selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>
            <div style={{marginTop: '157px'}}>
                <Button type="submit" variant={'NextBtn'} onClick={handleNext}>다음</Button>
            </div>
        </Main2_Container>
    )
}

export default Main3;