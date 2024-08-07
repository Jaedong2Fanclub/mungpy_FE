import React from "react";
import { Box, Img, SubImg, DogImg, Title, List, ListItem } from './homeStyle';
import kara from '../../img/First.png';
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";
import Header from "../Header/header";
import MainImg from '../../img/mainImg.jpg';
import moreImg from '../../img/more.png';
import dog1 from '../../img/dog1.jpg';
import dog2 from '../../img/dog2.jpg';
import dog3 from '../../img/dog3.jpeg';

interface Contact {
    name: string;
    phone: string;
}

const jejuAnimalProtectionCenterContacts: Contact[] = [
    { name: "제주 동물보호센터", phone: "064-710-4065" },
    { name: "제주 동물보호센터", phone: "064-710-4065" },
    { name: "제주 동물보호센터", phone: "064-710-4065" },
    { name: "제주 동물보호센터", phone: "064-710-4065" },
    { name: "제주 동물보호센터", phone: "064-710-4065" }
];

const Home = () => {
    const navigate = useNavigate();

    const NextPage = (type : string) => {
        navigate("/registration", { state: { type }})
    }

    const NextPage2 = () => {
        navigate("/registration2")
    }

    return (
        <Box>
            <Header/>
            <Img src={MainImg}/>
            <SubImg src={moreImg}/>
            <Title><span>최근 입양된 댕댕이</span></Title>
            <div style={{ fontSize: '20px', fontWeight: 900}}>
                <DogImg src={dog1}/>
                <DogImg src={dog2}/>
                <DogImg src={dog3}/>
            </div>
            <Title>제주 유기견 보호소</Title>
            <List>
                {jejuAnimalProtectionCenterContacts.map((contact, index) => (
                    <ListItem key={index}>
                        <strong>{contact.name}</strong> {contact.phone}
                    </ListItem>
                ))}
            </List>
            <div style={{display: 'flex' , margin: '5px'}}>
                <Button type="submit" variant={'registrationBtn'} onClick={() => NextPage('강아지 등록')}>강아지 등록</Button>
                <Button type="submit" variant={'registrationBtn'} onClick={NextPage2}>보호소 등록</Button>
            </div>
        </Box>
    )
}

export default Home;