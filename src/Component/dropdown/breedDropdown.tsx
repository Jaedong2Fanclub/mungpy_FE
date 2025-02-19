import axios from "axios";
import { useEffect, useState } from "react"
import Select from "react-select";
import { customStyles } from "../../utils/selectStyle";

interface BreedSelectorProps {
  title ?: string;
  animalType: string;
  onBreedSelect: (breed: string) => void
}

const BreedSelector:React.FC<BreedSelectorProps> = ({animalType, onBreedSelect, title}) => {
  const [options, setOptions] = useState([{ value: "", label: "모든 품종" }]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const fetchBreeds = async() => {
      try {
        const query = animalType ? `?animalType=${animalType}` : '';
        const res = await axios.get(`/api/animals/breeds${query}`);
        const breeds = res.data.map((breed: { breedName: string }) => ({ 
          value : breed.breedName,
          label : breed.breedName,
        }));
        setOptions([{value: "", label: "모든 품종"}, ...breeds]);
      } catch(error) {
        console.error("error breeds : ", error);
      }
    };

    fetchBreeds();
    
  },[animalType]);

  const handleSelect = (option: any) => {
    if(option) {
      setSelectedOption(option);
      onBreedSelect(option.value);
      console.log("selected breed : ", option.value);
    }
  };

  return (
    <div style={{marginTop: '1rem', width: '100%'}}>
      {title && (
          <p style={{fontSize: '14px', fontWeight: '600'}}>
          {title}
          <span style={{color: 'red'}}>*</span>
        </p>
      )}
      <Select
        options={options}
        value={selectedOption}
        onChange={handleSelect}
        placeholder="모든 품종"
        styles={customStyles}
        isClearable
      />
    </div>
  )
}

export default BreedSelector;