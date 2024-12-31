import { useEffect, useState } from "react";
import Header from "../Header/header";
import Search from "../Search/search";
import styled from "styled-components";
import axios from "axios";
import data from '../../mock/list.json';
import PostItem from "../List/findAnimalList";

const ResultContainer = styled.div`
  margin-top: 20px;
`;

const Badge = styled.div`
  display: inline-block;
  padding: 5px 10px;
  background-color: #ff8c00;
  color: white;
  border-radius: 20px;
  margin-right: 10px;
  font-size: 14px;
`;

const ResetButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff6a00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #cc5800;
  }
`;

const SwipeContainer = styled.div<{ isOpen : boolean}>`
position: fixed;
bottom: ${(props) => (props.isOpen ? "0" : "-100%")};
left: 0;
width: 100%;
height: 50%;
background-color: white;
box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
transition: bottom 0.3s ease-in-out;
z-index: 1000;
`

const ToggleBtn = styled.button`
padding: 10px 20px;
font-size: 16px;
background-color: #007bff;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
z-index: 5000;

&:hover {
  background-color: #0056b3;
}
`

// 닫기 버튼 스타일
const CloseButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #a71d2a;
  }
`;

// 내용 스타일
const Content = styled.div`
  padding: 20px;
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const AnimalSearch = ({text} : {text:string}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchComplete, setIsSearchComplete] = useState(false);
  const [searchData, setSearchData] = useState<{
    location: string;
    shelter: string;
    gender: string;
  }>({ location: "", shelter: "", gender: "모두" });

  const [allAnimals, setAllAnimals] = useState<any[]>([]);
  const [filteredAnimals, setFilterAnimals] = useState<any[]>([]);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  }

  const closeOnOverlayClick = () => {
    setIsOpen(false);
  };

  const handleSearch = (data: { location: string; shelter: string; gender: string }) => {
    setSearchData(data); // 검색 데이터 저장
    setIsSearchComplete(true); // 검색 완료 상태 전환

    //필터링 로직
    const filtered = allAnimals.filter((animal) => {
      const matchesLocation = !data.location || animal.location.includes(data.location);
      const matchesShelter = !data.shelter || animal.shelter.includes(data.shelter);
      const matchesGender = data.gender === "모두" || animal.gender === data.gender;
      return matchesLocation && matchesShelter && matchesGender;
    })

    setFilterAnimals(filtered);
  };

  const handleReset = () => {
    setIsSearchComplete(false); // 초기화
    setSearchData({ location: "", shelter: "", gender: "모두" });
    setFilterAnimals(allAnimals);
  };

  useEffect(() => {
    const fetchAnimals = async() => {
      try {
        const res = await axios.get("/api호출url");
        setAllAnimals(res.data);
        setFilterAnimals(res.data);
      } catch (error) {
        console.log("animal search error : ", error);
      }
    };
    fetchAnimals();
  })

  useEffect(()=> {
    setAllAnimals(data);
    setFilterAnimals(data);
  })

  return (
    <div>
      {/* <Header/> */}
      <p>{text}</p>
      {!isSearchComplete ? (
        <>
        <div>
        <button onClick={handleOpen}>
            <ResultContainer>
              <Badge>{searchData.location || "지역"}</Badge>
              <Badge>{searchData.shelter || "보호소"}</Badge>
              <Badge>
                {searchData.gender === "모두"
                  ? "모두"
                  : searchData.gender === "female"
                  ? "여자"
                  : "남자"}
              </Badge>
            </ResultContainer>
        </button>
        <Overlay isOpen={isOpen} onClick={closeOnOverlayClick} />
        <SwipeContainer isOpen={isOpen}>
          <Content>
            <Search onSearch={handleSearch} title={text}/>
          </Content>
        </SwipeContainer>
        </div>
        <PostItem data={allAnimals}/>
        </>
      ) : (
        <>
          <ResultContainer>
            <div>
              <ResetButton onClick={handleReset}>⟳</ResetButton>
              <Badge>{searchData.location || "모든 지역"}</Badge>
              <Badge>{searchData.shelter || "모든 보호소"}</Badge>
              <Badge>
                {searchData.gender === "모두"
                  ? "모두"
                  : searchData.gender === "female"
                  ? "여자"
                  : "남자"}
              </Badge>
            </div>
          </ResultContainer>
          <div>
             <PostItem data={filteredAnimals}/>
          </div>
        </>
      )}
    </div>
  )
}

export default AnimalSearch;