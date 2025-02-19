export const customStyles = {
  control: (provided: any) => ({
    ...provided,
    width: "100%", // 부모 요소에 맞게 너비를 설정
    // minWidth: "370px", // 최소 너비를 설정
    border: "1px solid #E8E8E8",
    boxShadow: "none",
    borderRadius: "5px",
    height: "38px",
    alignItems: "center",
    display: "flex",
    fontSize: "14px",
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    height: "100%",
    display: "flex",
    alignItems: "center",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    margin: 0, // 마진 제거
  }),
  indicatorsContainer: () => ({
    display: "none", // 화살표 아이콘 숨기기
  }),
  indicatorSeparator: () => ({
    display: "none", // 구분선(세로선) 숨기기
  }),
  menu: (provided: any) => ({
    ...provided,
    // width: "370px", // control과 동일한 너비 설정
    minWidth: "300px", // 최소 너비 설정
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#E8E8E8" : "white",
    color: "black",
  }),
};
