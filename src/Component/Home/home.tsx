import React, {useEffect, useState} from "react";
import {
    Box,
    Img,
    Img2, Img3,
    SearchSection, Section3P,
    SectionFirst,
    SectionSecond,
    SectionSecondP,
    SectionThird,
    SectionWrapper
} from './homeStyle';
import Header from "../Header/header";
import Friend from '../../img/friend.png';
import FindMe from '../../img/findMe.png';
import FindFriend from '../../img/findFriend.png';
import Dog from '../../img/dog.png';
import PostItem from "../List/findAnimalList";
import data from '../../mock/list.json';
import Footer from "../Footer/footer";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        setPosts(data);
    },[])
    return (
        <>
        <Box>
            <Header/>
            <SectionWrapper>
                <SectionFirst>
                    <div>
                        안녕하세요!<br/>
                        당신의 메이트를<br/>
                        찾아줄 멍피에요
                    </div>
                    <div>
                        <img src={Friend} alt="광고 이미지"/>
                    </div>
                </SectionFirst>
                <SectionSecond>
                    <SearchSection onClick={()=> navigate("/")}>
                        <SectionSecondP>나와 닮은 반려<br/> 찾아보기</SectionSecondP>
                        <Img src={FindMe} alt="닮은꼴 찾기"/>
                    </SearchSection>
                    <SearchSection onClick={() => navigate('/animalRegister')}>
                        <SectionSecondP>입양하기</SectionSecondP>
                        <Img2 src={FindFriend} alt="입양"/>
                    </SearchSection>
                </SectionSecond>
                <div>
                    <SectionThird>
                        <Img3 src={Dog} alt="강아지"/>
                        <Section3P>찾고 있어요</Section3P>
                    </SectionThird>
                    <PostItem data={posts}/>
                </div>
                <div>
                    <SectionThird>
                        <Img3 src={Dog} alt="강아지"/>
                        <Section3P>찾았어요</Section3P>
                    </SectionThird>
                    <PostItem data={posts}/>
                </div>
                <div>
                    <SectionThird>
                        <Img3 src={Dog} alt="강아지"/>
                        <Section3P>베스트 후기</Section3P>
                    </SectionThird>
                    <PostItem data={posts}/>
                </div>
            </SectionWrapper>
        </Box>
            <Footer/>
        </>
    )
}

export default Home;