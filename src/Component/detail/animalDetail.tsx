import React, { useState, useEffect } from "react";
import { useSpringCarousel } from "react-spring-carousel";
import axios from "axios";
import { useParams } from "react-router-dom";

interface AnimalDetails {
  name: string;
  gender: string;
  neutered: string;
  age: string;
  weight: string;
  description: string;
  breed: string;
  email: string;
  shelter: string;
  location: string;
  contactPerson: string;
  images: string[]; // 이미지 배열
}

const AnimalDetail = () => {
  const [data, setData] = useState<AnimalDetails | null>(null);
  const {id} = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/animal/${id}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching animal data:", error);
      }
    };

    fetchData();
  }, [id]);

  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    items: data?.images.map((image, index) => ({
      id: `image-${index}`,
      renderItem: (
        <img
          src={image}
          alt={`Animal ${index + 1}`}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      ),
    })) || [], // 초기 값 처리
  });

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* 이미지 캐러셀 */}
      <div style={{ position: "relative", width: "100%", height: "300px" }}>
        {carouselFragment}
        <button
          onClick={slideToPrevItem}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            cursor: "pointer",
          }}
        >
          {"<"}
        </button>
        <button
          onClick={slideToNextItem}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            cursor: "pointer",
          }}
        >
          {">"}
        </button>
      </div>

      {/* 동물 정보 */}
      <div style={{ padding: "20px" }}>
        <h1>{data.name}</h1>
        <p>성별: {data.gender}</p>
        <p>중성화 여부: {data.neutered}</p>
        <p>나이: {data.age}</p>
        <p>몸무게: {data.weight}</p>
        <p>특징: {data.description}</p>
        <p>품종: {data.breed}</p>
        <p>이메일: {data.email}</p>
        <p>보호소: {data.shelter}</p>
        <p>구조된 장소: {data.location}</p>
        <p>담당자 이름: {data.contactPerson}</p>
      </div>
    </>
  );
};

export default AnimalDetail;
