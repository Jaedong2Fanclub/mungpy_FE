import { DataProps, ShelterDetailProps } from "../../constants/interface";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "../header/header";
import { IoMdShare } from "react-icons/io";
import HeartIcon from "../../img/heart.svg";
import HoverHeartIcon from "../../img/hoverHeart.svg";
import Button from "../button/button";
import DetailContainer from "./detailContainer";
import ShareContainer from "../share/ShareContainer";
import KakaoMap from "../Map/kakaoMap";

const ShelterDetail = () => {
  const data = useLocation().state as ShelterDetailProps;
  const [likeClicked, setLikeClicked] = useState(false);
  const { handleShare, shareClicked } = ShareContainer({ data });

  console.log(data);
  if (!data) {
    return <p>Loading...</p>;
  }

  const likeHandleClick = () => {
    setLikeClicked(!likeClicked);
  }

  const handleMessage = () => {
    console.log("문의하기");
  }

  return (
    <DetailContainer buttonText="문의하기" onClick={handleMessage}>
      {/* 보호소 정보 */}
      <div>
        <div style={{display: "flex", flexDirection: "column", padding: "15px"}}>
          <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row"}}>
            <div style={{display: "flex", alignItems: "center", gap: "20px", flexDirection: "row", justifyContent: "center"}}>
                <img src={data.image} alt="보호소 이미지" style={{width: "60px", height: "60px", borderRadius: "50%"}}/>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>{data.shelterName}</p>
                    <p style={{fontWeight: "normal", color: "#BEBEBE", fontSize: "14px"}}>{data.address}</p>
                </div>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
              <button 
                onClick={handleShare}
                style={{border: "1px solid #E6E6E6", backgroundColor: "white", borderRadius: "50%", padding: "5px"}}
              >
                <IoMdShare style={{width: "20px", height: "20px", color: shareClicked ? "#075DDE" : "#BEBEBE"}}/>
              </button>
              <button 
                style={{border: "1px solid #E6E6E6", backgroundColor: "white", borderRadius: "50%", padding: "5px"}} 
                onClick={likeHandleClick}
              >
                {likeClicked ? 
                  <img src={HeartIcon} alt="heart" style={{width: "20px", height: "20px"}}/>
                  :
                  <img src={HoverHeartIcon} alt="heart" style={{width: "20px", height: "20px"}}/>
                }
              </button>
            </div>
          </div>
        </div>
        <div style={{borderBottom: "2px solid #F6F6F6"}}></div>
        <div style={{display: "flex", flexDirection: "column", padding: "15px", gap: "10px"}}>
          <div>
            <p>보호소 소개글</p>
            <p style={{fontWeight: "normal", color: "#BEBEBE"}}>{data.description}</p>
          </div>
          <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
            <p>보호소 홈페이지</p>
            <a href={data.link} style={{fontWeight: "normal", color: "#BEBEBE", fontSize: "14px", textDecoration: "underline"}}>{data.link}</a>
          </div>
          <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
            <p>이메일 및 전화번호</p>
            <p style={{fontWeight: "normal", color: "#BEBEBE", fontSize: "14px"}}>{data.email}</p>
            <p style={{fontWeight: "normal", color: "#BEBEBE", fontSize: "14px"}}>{data.telno}</p>
          </div>
          <div>
            <p>보호소 위치</p>
            <KakaoMap lat={data.lat} lng={data.lng}/>
          </div>
        </div>
      </div>
    </DetailContainer>
  );
};

export default ShelterDetail;
