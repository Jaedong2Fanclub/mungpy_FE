import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dog } from "../../constants/interface";
import { Container, ImageWrapper, DogName, Subtitle, Description, Divider, Bio, Heart} from './resultStyle';
import Button from "../Button/button";
import { useNavigate, useParams } from "react-router-dom";

const Result = () => {
    const {id} = useParams();
    const [dogData, setDogData] = useState<Dog>();
    const navigator = useNavigate();

    function NextPage() {
        navigator("/detail");
    }

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

    if(!dogData) {
        return <div>Loading...</div>
    }

    return (
        <Container>
            <ImageWrapper>
                <img src={`/image/${dogData.image}`} alt={dogData.name} />
            </ImageWrapper>
            <DogName>{dogData.name}</DogName>
            <Subtitle>*이름은 임시입니다.</Subtitle>
            <Description>{dogData.personality.join(", ")}</Description>
            <Divider />
            <Bio>
                안녕하세요:-)<br/>
                저는 {dogData.rescuePlace}에서 발견된 {dogData.name}입니다!<br/>
                저는 활발하고 산책 나나가는걸 좋아해요.
            </Bio>
            <Heart>❤</Heart>
            <div style={{marginTop: '157px'}}>
                <Button type="submit" variant={'NextBtn'} onClick={NextPage}>다음</Button>
            </div>
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