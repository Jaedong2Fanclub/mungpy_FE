import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dog } from "../../constants/interface";
import { P, Container, ImageWrapper, DogName, Subtitle, Description, Divider, Bio, Heart} from './resultStyle';
import Button from "../Button/button";
import { useNavigate, useParams } from "react-router-dom";

const Result = () => {
    const {id} = useParams();
    const [dogData, setDogData] = useState<Dog | null>(null);
    const navigator = useNavigate();

    function NextPage() {
        navigator(`/detail/${id}`);
    }

    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        axios.get(`/dog/${id}`, {
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


    return (
        <Container>
            <P>사용자님과 닮은 유기견은</P>
            <ImageWrapper>
                <img src={imageSrc} alt={dogData.name} />
            </ImageWrapper>
            <DogName>{dogData.name}</DogName>
            <Subtitle>*이름은 임시입니다.</Subtitle>
            <Description>{dogData.description}</Description>
            <Divider />
            <Bio>
                {dogData.matchReason}
            </Bio>
            <Heart>❤</Heart>
            <div style={{marginTop: '157px'}}>
                <Button type="submit" variant={'NextBtn'} onClick={NextPage}>다음</Button>
            </div>
        </Container>
    )
}

export default Result;