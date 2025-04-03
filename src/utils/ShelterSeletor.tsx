import React from "react";
import Select from "react-select";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setShelter } from "../action/shelterAction";
import { customStyles } from "./selectStyle";

interface Props {
  onSelect: (shelter: string) => void;
  title?: string;
}

const ShelterSelector: React.FC<Props> = ({onSelect, title}) => {
  const dispatch = useAppDispatch();
  const shelters = useAppSelector((state) => state.shelter.shelters);

  const shelterOptions = shelters.map((shelter) => ({
    value: shelter.name,
    label: `${shelter.name} (${shelter.region})`,
  }));

  const handleSelect = (selectedOption: any) => {
    const selectedShelter = shelters.find((s) => s.name === selectedOption.value);
    if (selectedShelter) {
      dispatch(setShelter(selectedShelter)); // Redux 상태 업데이트
      onSelect(selectedOption.value); // 부모로 전달
    }
  };

  return (
    <div style={{marginTop: '1rem'}}>
      {title && (
        <p style={{fontSize: '14px', fontWeight: '600'}}>
          {title}
          <span style={{color: 'red'}}>*</span>
        </p>
      )}
      <Select
        id="shelter-select"
        options={shelterOptions}
        onChange={handleSelect}
        placeholder="모든 보호소"
        styles={customStyles}
      />
    </div>
  );
};

export default ShelterSelector;
