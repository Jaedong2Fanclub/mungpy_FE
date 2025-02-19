import Select from "react-select";
import { map } from "../constants/map";
import {
  setSido,
  setSigugun,
} from "../action/mapAddressAction"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducer/rootReducer";
import { useEffect } from "react";
import './style.scss';
import { customStyles } from "./selectStyle";

const MapSelector= ({onSelect}: { onSelect: (sido: string, sigugun: string) => void }) => {
  const { sido, sigugun } = useSelector((state:RootState) => state.address);
  const dispatch = useDispatch();
  

  const sidoArray = map.sido;
  const sigugunArray = map.sigugun
  .filter((item) => item.link === sido)
  .map((item) => ({value : item.value, label: item.label}));

  const address = `${sido} ${sigugun}`;
  console.log(address);

  const sidoHandler = (selectedSido: any) => {
    dispatch(setSido(selectedSido.value));
    onSelect(selectedSido.value, sigugun);
  };
  const sigugunHandler = (selectedSigugun:any) => {
    dispatch(setSigugun(selectedSigugun.value));
    onSelect(sido, selectedSigugun.value);
  };

  useEffect(() => {
    onSelect(sido, sigugun);
  },[sido,sigugun, onSelect]);

  return (
    <div className="location-selector">
      <div className="field-wrapper">
        <p>지역</p>
          <Select
            onChange={sidoHandler}
            options={sidoArray}
            placeholder="모든 지역"
            value={sidoArray.find((option) => option.value === sido)}
            styles={customStyles}
          />
      </div>
      <div>
        <p>시군구</p>
          <Select
            onChange={sigugunHandler}
            options={sigugunArray}
            placeholder="모든 지역"
            value={sigugunArray.find(
              (option) => option.value === sigugun
            )}
            styles={customStyles}
          />
      </div>
    </div>
  );
};

export default MapSelector;