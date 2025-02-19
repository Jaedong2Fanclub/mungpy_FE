import React, { useState } from "react";
import ProfileImgUpload from "./profile/profile"
import Button from "../button/button";
import { useNavigate } from "react-router-dom";
import {Main2_Container, Main2_P, Main2_P2, P3} from './mungpy/mainStyle';

interface ProfileProps {
    onNext: (additionalData: any) => Promise<void>;
  }

const Profile:React.FC<ProfileProps> = ({ onNext }) => {
    const [imageFile, setImageFile] = useState<File|null>(null);

    const handleImageLoad = (file: File) => {
        // console.log("Image loaded:", file);
        setImageFile(file);
    };

    const handleNext = () => {
        if(!imageFile) {
            alert("사용자님의 이미지가 필요해요!");
            return;
        }
        onNext({imageFile});
        console.log("프로필 첨부 단계에서의 이미지 : ", imageFile);
    };

    return (
        <Main2_Container>
            <div style={{ marginBottom: "100px"}}>
                <ProfileImgUpload onImageLoad={handleImageLoad}/>
            </div>
            <Button type="submit" variant={'NextBtn'} onClick={handleNext}>다음</Button>
        </Main2_Container>
    )
}

export default Profile;