import React, { useState } from "react";
import ProfileImgUpload from "./profile/profile"
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";
import {Main2_Container, Main2_P, Main2_P2} from './mainStyle';

const Main2 = () => {
    const navigator = useNavigate();

    function NextPage() {
        navigator("/personality");
    }

    const handleImageLoad = (file: File) => {
        console.log("Image loaded:", file);
    };

    

    return (
        <Main2_Container>
            <Main2_P>사용자님의 이미지를</Main2_P>
            <Main2_P2>첨부해주세요!</Main2_P2>
            <div>
                <ProfileImgUpload onImageLoad={handleImageLoad}/>
            </div>
            <div style={{marginTop: '216px'}}>
                <Button type="submit" variant={'NextBtn'} onClick={NextPage}>다음</Button>
            </div>
        </Main2_Container>
    )
}

export default Main2;