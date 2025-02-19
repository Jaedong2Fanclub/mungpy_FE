import { useEffect, useState } from "react";
import Header from "../header/header";
import Search from "../search/search";
import axios from "axios";
import PostItem from "../list/findAnimalList";
import {HiChevronDown} from 'react-icons/hi2';
import './style.scss';

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

  const [allAnimals, setAllAnimals] = useState<any[]>([]);
  const [filteredAnimals, setFilteredAnimals] = useState<any[]>([]);

  useEffect(() => {
    const fetchAnimals = async() => {
      try {
        let apiUrl = "/api/animals";
        if(text === "보호소 정보 조회") {
          apiUrl = "api/shelters";
        }
        const res = await axios.get(apiUrl);
        setAllAnimals(res.data);
        setFilteredAnimals(res.data);
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
    if(text === "보호소 정보 조회") {
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
    <div>
      <Header/>
      <p className="search-title">{text}</p>
      {!isSearchComplete ? (
        <>
        <div>
          <div className="search-button-container-wrapper">
            <button 
            className="search-button-container"
            onClick={handleOpen}
            >
              <div className="result-container">
                <div  className={isSearchComplete ? "badge complete" : "badge"}>{searchData.location || "지역"}<HiChevronDown/></div>
                {text !== "보호소 정보 조회" && (
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
          <hr/>
          <div className={`overlay ${isOpen ? "visible" : ""}`} onClick={closeOnOverlayClick}>
            <div 
              className={`swipe-container ${isOpen ? "open" : ""}`}
              onClick={(e) => e.stopPropagation()}
            >
                <Search onSearch={handleSearch} title={text}/>
            </div>
          </div>
          <PostItem data={allAnimals}/>
        </div>
        </>
      ) : (
        <>
          <div className="result-container-wrapper">
            <div className="result-container">
              <button className="reset-button" onClick={handleReset}>⟳</button>
              <div className={isSearchComplete ? "badge complete" : "badge"}>{searchData.location || "모든 지역"}<HiChevronDown/></div>
              { text !== "보호소 정보 조회" && (
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
            <PostItem data={filteredAnimals}/>
        </div>
        </>
      )}
    </div>
  )
}

export default AnimalSearch;