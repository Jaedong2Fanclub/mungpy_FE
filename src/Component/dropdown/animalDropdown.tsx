import Select from "react-select";
// import Dropdown from "./dropdown";
import { customStyles } from "../../utils/selectStyle";
import { useState } from "react";

interface AnimalDropdownProps {
  setAnimalType: (type: string) => void;
}

const AnimalDropdown:React.FC<AnimalDropdownProps> = ({setAnimalType}) => {
  const options = [
    { value : 'OTHER', label : '모든 동물' },
    { value : "DOG", label : '강아지' },
    { value : 'CAT', label : '고양이' }
  ];

  const [selectedOption, setSelectedOption] = useState<{ value: string; label: string } | null>(null);;

  const handleSelect = (option: { value: string; label: string } | null) => {
    if (option) {
      console.log(option.value);
      setSelectedOption(option);
      setAnimalType(option.value);
    } else {
      setSelectedOption(null);
      setAnimalType("");
    }
  };

  return (
    <div style={{marginTop: '1rem'}}>
      <p>동물</p>
      <Select
        options={options}
        value={selectedOption}
        onChange={handleSelect}
        placeholder="모든 동물"
        styles={customStyles}
        isClearable
      />
    </div>
  )
}

export default AnimalDropdown;