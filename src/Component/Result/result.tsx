import React, { useEffect, useState } from "react";
import axios from "axios";
import * as M from "../Main/mainStyle";
import { Dog } from "../../constants/interface";
import { Container, ImageWrapper, DogName, Subtitle, Description, Divider, Bio, Heart} from './resultStyle';

const Result = () => {
    const [dog, setDog] = useState<Dog | null>(null);

    const getDog = async (id: number) => {
        const SERVER_URL = process.env.REACT_APP_BASE_URL;
        try {
            const response = await axios.get(`${SERVER_URL}/dog/${id}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching dog data", error);
            throw error;
        }
    };

    useEffect(() => {
        const fetchDogData = async () => {
        try {
            const data = await getDog(1);
            setDog(data);
        } catch (error) {
            console.error("Failed to fetch dog data");
        }
        };
        fetchDogData();
    }, []);

    if (!dog) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <ImageWrapper>
                <img src={`/image/${dog.image}`} alt={dog.name} />
            </ImageWrapper>
            <DogName>{dog.name}</DogName>
            <Subtitle>*이름은 임시입니다.</Subtitle>
            <Description>{dog.personality.join(", ")}</Description>
            <Divider />
            <Bio>
                안녕하세요:-)<br/>
                저는 {dog.rescuePlace}에서 발견된 {dog.name}입니다!<br/>
                저는 활발하고 산책 나나가는걸 좋아해요.
            </Bio>
            <Heart>❤</Heart>
        </Container>
    )
}

export default Result;

// API 문서
// GET /dog/:id (일단 1로 넣어주세요)
// response
// {
//     "age": 3,
//     "sex": "F",
//     "kind": null,
//     "name": "핫도그",
//     "image": "example.png",
//     "personality": [
//         "성격1",
//         "성격2",
//         "성격3",
//         "성격4",
//         "성격5",
//         "성격6"
//     ],
//     "rescuePlace": "구조 장소",
//     "protectPlace": "보호 장소",
//     "protectTelno": "보호자(장소) 번호",
//     "expirationDate": "2024-08-20"
// }