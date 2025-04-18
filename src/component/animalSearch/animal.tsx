import { useEffect, useState } from "react";
import Header from "../header/header";
import Search from "../Search/search";
import axios from "axios";
import PostAnimal from "../List/postAnimal";
import {HiChevronDown} from 'react-icons/hi2';
import './style.scss';
import {list} from '../../mock/list';
import { shelter } from "../../mock/shelter";
import { DataProps, ShelterDetailProps } from "../../constants/interface";


const AnimalSearch = ({text} : {text:string}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchComplete, setIsSearchComplete] = useState(false);
  const [searchData, setSearchData] = useState<{
    location: string;
    shelter: string;
    gender: string;
    animalType: string;
    breedType: string;
  }>({ location: "지역", shelter: "보호소", gender: "성별", animalType: "동물", breedType : '품종'});

  const [allAnimals, setAllAnimals] = useState<DataProps[] | ShelterDetailProps[]>([]);
  const [filteredAnimals, setFilteredAnimals] = useState<DataProps[] | ShelterDetailProps[]>([]);

  useEffect(() => {
    const fetchAnimals = async() => {
      try {
        // let apiUrl = "/api/animals";
        // if(text === "보호소 리스트") {
        //   apiUrl = "api/shelters";
        // }
        // const res = await axios.get(apiUrl);
        // setAllAnimals(res.data);
        // setFilteredAnimals(res.data);
        // 목데이터에 타입 단언 추가
        const mockData = text === "보호소 리스트" 
          ? shelter as ShelterDetailProps[]
          : list as DataProps[];
        
        setAllAnimals(mockData);
        setFilteredAnimals(mockData);
      } catch (error) {
        console.log("animal search error : ", error);
      }
    };
    
    fetchAnimals();
  },[text])

  const handleOpen = () => {
    setIsOpen(true);
  }

  const closeOnOverlayClick = () => {
    setIsOpen(false);
  };

  const handleSearch = (data:any) => {
    if(text === "보호소 리스트") {
      data = {...data, shelter: "", gender: "", animalType: "", breedType: "" };
    }
    setSearchData(data); // 검색 데이터 저장
    setIsSearchComplete(true); // 검색 완료 상태 전환
    fetchFilteredData(data);
  };

  const fetchFilteredData = async (data:any) => {
    const params = new URLSearchParams({
      upperRegion: data.location || '',
      lowerRegion: '',
      shelterName: data.shelter || '',
      animalType: data.animalType || '',
      breedType: data.breedType || '',
      gender: data.gender || ''
    }).toString();

    try {
      const response = await axios.get(`/api/animals?${params}`);
      setFilteredAnimals(response.data);
    } catch (error) {
      console.error("Filtered search error:", error);
    }
  };

  const handleReset = () => {
    setIsSearchComplete(false); // 초기화
    setSearchData({ location: "지역", shelter: "보호소", gender: "성별", animalType: "동물", breedType: "품종"});
    setFilteredAnimals(allAnimals);
  };

  return (
    <>
      <Header/>
      <div style={{width: "390px", overflow: "hidden"}}>
        <div style={{display: "flex", flexDirection: "row", gap: "10px", paddingLeft: "10px", paddingTop: "20px"}}>
          <p className="search-title">{text}</p>
          <p className="search-unit">총 {filteredAnimals.length}건</p>
        </div>
        {!isSearchComplete ? (
          <div style={{padding: "0 0 10px 10px"}}>
            <div className="search-button-container-wrapper">
              <button 
              className="search-button-container"
              onClick={handleOpen}
              >
                <div style={{display: "flex", gap: "8px"}}>
                  <div  className={isSearchComplete ? "badge complete" : "badge"}>{searchData.location || "지역"}<HiChevronDown/></div>
                  {text !== "보호소 리스트" && (
                    <>
                      <div className={isSearchComplete ? "badge complete" : "badge"}>{searchData.shelter || "보호소"}<HiChevronDown/></div>
                      <div className={isSearchComplete ? "badge complete" : "badge"}>
                        {searchData.animalType === "동물" || !searchData.animalType
                          ? "동물"
                          : searchData.animalType === "DOG"
                          ? "강아지"
                          : "고양이"
                        }
                        <HiChevronDown/>
                      </div>
                      <div className={isSearchComplete ? "badge complete" : "badge"}>{searchData.breedType || '품종'}<HiChevronDown/></div>
                      <div className={isSearchComplete ? "badge complete" : "badge"}>
                        {searchData.gender === "성별" || !searchData.gender
                          ? "성별"
                          : searchData.gender === "FEMALE"
                          ? "여자"
                          : "남자"
                        }
                        <HiChevronDown/>
                      </div>
                    </>
                  )}
                </div>
              </button>
            </div>
            <div className={`overlay ${isOpen ? "visible" : ""}`} onClick={closeOnOverlayClick}>
              <div 
                className={`swipe-container ${isOpen ? "open" : ""}`}
                onClick={(e) => e.stopPropagation()}
              >
                  <Search onSearch={handleSearch} title={text}/>
              </div>
            </div>
            <div style={{padding: "10px"}}>
            {text !== "보호소 리스트" && (<p style={{fontWeight: "normal"}}>최근에 등록된 동물</p>)}
              <div className="animal-list-container">
                <PostAnimal data={filteredAnimals}/>
              </div>
            </div>
          </div>
      ) : (
        <>
          <div className="result-container-wrapper">
            <div className="result-container">
              <button className="reset-button" onClick={handleReset}>⟳</button>
              <div className={isSearchComplete ? "badge complete" : "badge"}>{searchData.location || "모든 지역"}<HiChevronDown/></div>
              { text !== "보호소 리스트" && (
                <>
                  <div className={isSearchComplete ? "badge complete" : "badge"}>{searchData.shelter || "모든 보호소"}<HiChevronDown/></div>
                  <div className={isSearchComplete ? "badge complete" : "badge"}>
                    {searchData.animalType === "OTHER" || !searchData.animalType
                      ? "모두"
                      : searchData.animalType === "DOG"
                      ? "강아지"
                      : "고양이"
                    }
                    <HiChevronDown/>
                  </div>
                  <div className={isSearchComplete ? "badge complete" : "badge"}>{searchData.breedType || '품종'}<HiChevronDown/></div>
                  <div className={isSearchComplete ? "badge complete" : "badge"}>
                    {searchData.gender === "성별" || !searchData.gender
                      ? "모두"
                      : searchData.gender === "FEMALE"
                      ? "여자"
                      : "남자"}
                    <HiChevronDown/>
                  </div>
                  </>
              )}
            </div>
          </div>
          <div>
              <PostAnimal data={filteredAnimals}/>
          </div>
        </>
      )}
  </div>
    </>
  )
}

export default AnimalSearch;