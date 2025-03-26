import React, {useEffect, useState} from "react";
import {
    Box,
    SearchSection,
    SectionFirst,
    SectionSecond,
    SectionSecondP,
    SectionWrapper,
    ListSection,
    Img,
    Img2,
    Img3,
    SectionThird,
    Section3P
} from './homeStyle';
import Header from "../header/header";
import TitleDog from '../../img/title.svg';
import SearchDog from '../../img/searchDog.svg';
import Adoption from '../../img/adoption.svg';
import FindIcon from "../../img/findIcon.svg";
import FindItIcon from "../../img/findItIcon.svg";
import BestReviewIcon from "../../img/bestReview.svg";
import PostItem from "../List/findAnimalList";
import data from '../../mock/list.json';
import {useNavigate} from "react-router-dom";

const Home = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        setPosts(data);
    },[])
    return (
        <Box>
            <Header/>
            <SectionWrapper>
                <SectionFirst>
                    <div>
                        안녕하세요!<br/>
                        당신의 <span style={{color: '#FF7920'}}>메이트</span>를<br/>
                        찾아줄 <span style={{color: '#FF7920'}}>멍피</span>에요
                    </div>
                    <div>
                        <img src={TitleDog} alt="광고 이미지"/>
                    </div>
                </SectionFirst>
                <SectionSecond>
                    <SearchSection onClick={()=> navigate("/")}>
                        <SectionSecondP>나와 닮은 반려<br/> 찾아보기</SectionSecondP>
                        <Img src={SearchDog} alt="닮은꼴 찾기"/>
                    </SearchSection>
                    <SearchSection onClick={() => navigate('/animalRegister')}>
                        <SectionSecondP>입양하기</SectionSecondP>
                        <Img2 src={Adoption} alt="입양"/>
                    </SearchSection>
                </SectionSecond>
                <ListSection>
                    <SectionThird>
                        <Img3 src={FindIcon} alt="찾고 있어요"/>
                        <Section3P>찾고있어요</Section3P>
                    </SectionThird>
                    <PostItem data={posts}/>
                </ListSection>
                <ListSection>
                    <SectionThird>
                        <Img3 src={FindItIcon} alt="찾았어요"/>
                        <Section3P>찾았어요</Section3P>
                    </SectionThird>
                    <PostItem data={posts}/>
                </ListSection>
                <ListSection>
                    <SectionThird>
                        <Img3 src={BestReviewIcon} alt="베스트 후기"/>
                        <Section3P>베스트 후기</Section3P>
                    </SectionThird>
                    <PostItem data={posts}/>
                </ListSection>
            </SectionWrapper>
        </Box>
    )
}

export default Home;