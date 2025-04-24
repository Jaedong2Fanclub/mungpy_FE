import { useState } from "react";
import ShelterRegister1 from "../registration/shelterRegister1";
import ShelterRegister2 from "../registration/shelterRegister2";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../header/header";

const ShelterRegister = () => {
  const [registerData, setRegisterData] = useState({
    gender: "",
    neutering: "",
    age: 0,
    weight: 0,
    name: "",
    images: [],
    character: "",
    savior: "",
    location: "",
    email: "",
    shelter: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const handleNext = (data: {
    gender: string;
    neutering: string;
    age: number;
    weight: number;
    name: string;
    images: any[];
  }) => {
    setRegisterData((prev: any) => ({ ...prev, ...data }));
    navigate("/shelterRegister/2");
  };

  const handleSubmit = (data: {
    character: string;
    savior: string;
    location: string;
    email: string;
    shelter: string;
  }) => {
    const finalData = { ...registerData, ...data };
    console.log("data : ", finalData);

    axios
      .post("api url", finalData)
      .then((res) => {
        console.log("data success : ", res);
        navigate("/animalSearch");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ width: "390px" }}>
      <Header/>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
          fontWeight: "700",
          borderBottom: "3px solid #F6F6F6",
          paddingBottom: "1rem"
        }}
      >
        유기견/묘 등록
      </div>
      <div>
        {location.pathname === "/shelterRegister" && (
          <ShelterRegister1 onNext={handleNext} />
        )}
        {location.pathname === "/shelterRegister/2" && (
          <ShelterRegister2 onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
};

export default ShelterRegister;
