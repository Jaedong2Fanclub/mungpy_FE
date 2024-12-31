import React, { useEffect, useState } from "react";
import KakaoMap from "../Map/kakaoMap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Dog } from "../../constants/interface";
import * as D from './resultStyle';
import boy from '../../img/boy.png';
import girl from '../../img/woman.png';
import Button from "../Button/button";
import share from '../../img/share_.png';

const DetailResult = () => {
    const {id} = useParams<{id:string}>();
    const [dogData, setDogData] = useState<Dog>();
    const [imageSrc, setImageSrc] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const dogId = Number(id);
        axios.get(`/dog/${dogId}`, {
            headers : {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': '69420'
            },
        })
        .then(res => {
            console.log(res.data);
            setDogData(res.data);
        })
        .catch(error => {
            console.error(error);
        })
    },[id]);

    useEffect(() => {
        if (dogData?.image) {
            const fetchImage = async () => {
                try {
                    const response = await fetch(`https://f625-123-214-153-130.ngrok-free.app${dogData.image}`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'ngrok-skip-browser-warning': '69420'
                        }
                    });
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const blob = await response.blob();
                    const url = URL.createObjectURL(blob);
                    setImageSrc(url);
                } catch (error) {
                    console.error('Error fetching image:', error);
                }
            };

            fetchImage();
        }
    }, [dogData?.image]);

    if(!dogData) {
        return <div>Loading...</div>
    }

    function Home() {
        navigate("/home");
    }

    return (
        <D.D_Container>
            <div style={{width: '243px'}}>
                <D.Title>{dogData?.protectPlace}</D.Title>
            </div>
            <D.DogContainer>
                <D.Image src={imageSrc}/>
            </D.DogContainer>
            <D.LabelDiv>
                <D.Info><D.InfoLabel>이름 : </D.InfoLabel>{dogData?.name}</D.Info>
                <D.Info><D.InfoLabel>성별 : </D.InfoLabel>{dogData?.sex === 'F' ? <D.SexImage src={girl}/> : <D.SexImage src={boy}/>}</D.Info>
                <D.Info><D.InfoLabel>나이 :</D.InfoLabel>{dogData?.age}세</D.Info>
                <D.Info><D.InfoLabel>품종 : </D.InfoLabel>{dogData?.kind || '알 수 없음'}</D.Info>
                <D.Info><D.InfoLabel>구조 장소 : </D.InfoLabel>{dogData?.rescuePlace}</D.Info>
                <D.Info><D.InfoLabel>보호 만료일 : </D.InfoLabel>{dogData?.expirationDate}</D.Info>
                <D.Info><D.InfoLabel>연락처 : </D.InfoLabel>{dogData?.protectTelno}</D.Info>
            </D.LabelDiv>
            <D.TagContainer>
                {dogData.personality && dogData.personality.map((trait, index) => (
                    <D.Tag key={index}>{trait}</D.Tag>
                ))}
            </D.TagContainer>
            <D.CenterDiv>
                센터 위치
                <KakaoMap lat={dogData.latitude} lng={dogData.longitude}/>
            </D.CenterDiv>
            <div style={{display: 'flex' , margin: '5px'}}>
                <Button type="submit" variant={'HomeBtn'} onClick={Home}>시작하기</Button>
                <Button type="submit" variant={'ShareBtn'}><D.ShareImg src={share}/></Button>
            </div>
        </D.D_Container>
    )
}

export default DetailResult;