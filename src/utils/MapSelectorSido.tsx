import Select from "react-select";
import { map } from "../constants/map";
import {
  setSido,
} from "../action/mapAddressAction"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducer/rootReducer";
import { useEffect } from "react";


const MapSelector= ({onSelect}: { onSelect: (sido: string) => void }) => {
  const { sido } = useSelector((state:RootState) => state.address);
  const dispatch = useDispatch();
  

  const sidoArray = map.sido;
  

  const address = `${sido}`;
  console.log(address);

  const sidoHandler = (selectedSido: any) => {
    dispatch(setSido(selectedSido.value));
    onSelect(selectedSido.value);
  };
  
  useEffect(() => {
    onSelect(sido);
  },[sido,onSelect]);

  return (
    <>
      <Select
        onChange={sidoHandler}
        options={sidoArray}
        placeholder="시/도 선택"
        value={sidoArray.find((option) => option.value === sido)}
      />
    </>
  );
};

export default MapSelector;