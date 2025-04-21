import { useEffect, useState } from "react";
import MapSelector from "../../utils/MapSelector";
import SelectionBar from "../button/selectionBar";
import ShelterSelector from "../../utils/ShelterSeletor";
import AnimalDropdown from "../dropdown/animalDropdown";
import BreedSelector from "../dropdown/breedDropdown";
import './style.scss';

const Search = ({
  title,
  onSearch,
}: {
  title : string
  onSearch: (searchData: {
    location: string;
    shelter: string;
    gender: string;
    animalType: string;
    breedType: string;
  }) => void;
}) => {
  const [formData, setFormData] = useState({
    location: "",
    shelter: "",
    gender: "",
    animalType: "",
    breedType: ""
  })

  const genderList = [
    { id: "gender1", name: "모두", value: "" },
    { id: "gender2", name: "여자", value: "FEMALE" },
    { id: "gender3", name: "남자", value: "MALE" },
  ];

  const isShelterSearch = title === "보호소 정보 조회";

  const handleChange = (filed: string, value: string) => {
    setFormData((prev) => ({...prev, [filed]: value}));
  };

  const handleSearch = () => {
    const searchData = isShelterSearch
    ? { location: formData.location, shelter: "", gender: "", animalType: "", breedType: ""}
    : {...formData}
    onSearch(searchData);
  }
  useEffect(() => {
    console.log("Form Data Updated:", formData);
  }, [formData]);
  

  return(
    <div className="search-container">
      <h4>{title}</h4>
      <hr/>
      <div style={{marginBottom: '1rem'}}>
        <MapSelector onSelect={(sido, sigugun) => handleChange("location", `${sido} ${sigugun}`)}/>
        {!isShelterSearch && (
          <>
            <p style={{marginTop: '1rem'}}>보호소</p>
            <ShelterSelector onSelect={(shelter) => handleChange("shelter", shelter)}/>
            <AnimalDropdown setAnimalType={(type) => handleChange("animalType", type)}/>
            <p style={{marginTop: '1rem'}}>품종</p>
            <BreedSelector 
              animalType={formData.animalType} 
              onBreedSelect={(breed) => handleChange("breedType", breed)}
            />
            <div style={{marginTop: '1rem'}}>
              <p>성별</p>
            </div>
            <SelectionBar 
            list={genderList}
            selectedValue={formData.gender}
            onSelect={(gender) => handleChange("gender", gender)}
            name="gender"
            />
          </>
        )}
      </div>
      <button className="search-button" onClick={handleSearch}>검색하기</button>
    </div>
  )
}

export default Search;