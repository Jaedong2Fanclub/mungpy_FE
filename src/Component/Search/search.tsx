import { useState } from "react";
import MapSelector from "../../utils/MapSelector";
import SelectionBar from "../Button/selectionBar";
import ShelterSelector from "../../utils/ShelterSeletor";

const genderList = [
  { id: "gender1", name: "모두", value: "all" },
  { id: "gender2", name: "여자", value: "female" },
  { id: "gender3", name: "남자", value: "male" },
];

const Search = ({
  title,
  onSearch,
}: {
  title : string
  onSearch: (searchData: {
    location: string;
    shelter: string;
    gender: string;
  }) => void;
}) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedShelter, setSelectedShelter] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const handleMapSelection = (sido: string, sigugun: string) => {
    const address = `${sido} ${sigugun}`;
    setSelectedLocation(address);
    console.log(sido, sigugun);
  };

  const handleShelterSelection = (shelterName: string) => {
    const name = `${shelterName}`
    setSelectedShelter(name);
    console.log(name);
  }

  const handleGenderSelectoin = (gender: string) => {
    setSelectedGender(gender);
    console.log("gender : ", gender);
  }

  const handleSearch = () => {
    onSearch({
      location : selectedLocation,
      shelter : selectedShelter,
      gender : selectedGender
    });
    // api 호출 로직짜기
    // setResult("yahoooooo~");
    // setIsSearchComplete(true);
  }

  return(
    <div>
      {title}
          <MapSelector onSelect={handleMapSelection}/>
          <ShelterSelector onSelect={handleShelterSelection}/>
          <SelectionBar 
          list={genderList}
          selectedValue="all"
          onSelect={handleGenderSelectoin}
          name="gender"
          />
          <button onClick={handleSearch}>검색하기</button>
    </div>
  )
}

export default Search;