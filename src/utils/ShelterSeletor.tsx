import React from "react";
import Select from "react-select";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setShelter } from "../action/shelterAction";

const ShelterSelector = ({ onSelect }: { onSelect: (shelter: string) => void }) => {
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
    <div>
      <p>보호소</p>
      <Select
        id="shelter-select"
        options={shelterOptions}
        onChange={handleSelect}
        placeholder="모든 보호소"
      />
    </div>
  );
};

export default ShelterSelector;
