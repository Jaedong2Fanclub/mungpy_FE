import React, { useEffect, useState } from "react";
import ProfileImgUpload from "./profile/profile"
import Button from "../Button/button";
import { useLocation, useNavigate } from "react-router-dom";
import {Main2_Container, Main2_P, Main2_P2} from './mainStyle';
import axios from "axios";
import Loading from "../Loading/loading";

const Profile:React.FC = () => {
    const location = useLocation();
    const navigator = useNavigate();
    const [imageFile, setImageFile] = useState<File|null>(null);
    const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const state = location.state as {selectedOptions: string[]};
        if(state && state.selectedOptions) {
            setSelectedTraits(state.selectedOptions);
        }
    },[location.state]);

    const handleImageLoad = (file: File) => {
        console.log("Image loaded:", file);
        setImageFile(file);
    };

    const handleNext = async() => {
        if(!imageFile) {
            alert("사용자님의 이미지가 필요해요!");
            return;
        }
        
        const formData = new FormData();
        formData.append('image', imageFile);
        formData.append('personality', JSON.stringify(selectedTraits));
        
        setIsLoading(true);
        try{
            const response = await axios.post('/dog', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const { id } = response.data; 
            navigator(`/result/${id}`);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <Loading />; // Display Loading component while loading
    }

    return (
        <Main2_Container>
            <Main2_P>사용자님의 이미지를</Main2_P>
            <Main2_P2>첨부해주세요!</Main2_P2>
            <div>
                <ProfileImgUpload onImageLoad={handleImageLoad}/>
            </div>
            <div style={{marginTop: '216px'}}>
                <Button type="submit" variant={'NextBtn'} onClick={handleNext}>다음</Button>
            </div>
        </Main2_Container>
    )
}

export default Profile;