import { useSpringCarousel } from "react-spring-carousel";
import { DataProps } from "../../constants/interface";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoMdShare } from "react-icons/io";
import HeartIcon from "../../img/heart.svg";
import HoverHeartIcon from "../../img/hoverHeart.svg";
import DetailContainer from "./detailContainer";
import ShareContainer from "../share/ShareContainer";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_LIKE } from "../../reducer/tokenSlice";

const AnimalDetail = () => {
  const data = useLocation().state as DataProps;
  const { id } = useParams();
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const dispatch = useDispatch();
  const { likedPosts } = useSelector((state: any) => state.authToken);
  const [likeClicked, setLikeClicked] = useState(id ? likedPosts.includes(Number(id)) : false);
  const { handleShare, shareClicked } = ShareContainer({ data });

  const { carouselFragment, slideToItem, slideToPrevItem, slideToNextItem } = useSpringCarousel({
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
          }}
        />
      ),
    })) || [],
    withLoop: true
  });

  // 자동 슬라이드 기능
  useEffect(() => {
    const interval = setInterval(() => {
      slideToNextItem();
      setCurrentSlide((prev) => (prev + 1) % data.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slideToNextItem, data.images.length]);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      slideToNextItem();
      setCurrentSlide((prev) => (prev + 1) % data.images.length);
    } else {
      slideToPrevItem();
      setCurrentSlide((prev) => (prev - 1 + data.images.length) % data.images.length);
    }
  };

  // 컴포넌트가 마운트될 때 현재 게시물의 좋아요 상태를 확인
  useEffect(() => {
    if (id) {
      setLikeClicked(likedPosts.includes(Number(id)));
    }
  }, [likedPosts, id]);

  if (!data) {
    return <p>Loading...</p>;
  }

  const likeHandleClick = () => {
    if (id) {
      console.log("Toggling like for post ID:", id);
      dispatch(TOGGLE_LIKE(Number(id)));
    }
  }

  return (
    <DetailContainer buttonText="채팅하기">
      {/* 이미지 캐러셀 */}
      <div 
        style={{ position: "relative", width: "100%", height: "300px", overflow: "hidden" }}
        onWheel={handleWheel}
      >
        {carouselFragment}
        
        {/* Dot Indicators */}
        <div style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}>
          {data.images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                slideToItem(index);
                setCurrentSlide(index);
              }}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                border: "none",
                background: currentSlide === index ? "#fff" : "#5E5E5E",
                cursor: "pointer",
                padding: 0,
                transition: "background-color 0.3s"
              }}
            />
          ))}
        </div>
      </div>

      {/* 동물 정보 */}
      <div>
        <div style={{display: "flex", flexDirection: "column", padding: "15px"}}>
          <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row"}}>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>{data.name}</p>
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
                  <img src={HoverHeartIcon} alt="heart" style={{width: "20px", height: "20px"}}/>
                  :
                  <img src={HeartIcon} alt="heart" style={{width: "20px", height: "20px"}}/>
                }
              </button>
            </div>
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
            <p style={{fontWeight: "bold", color: "#BEBEBE"}}>{data.gender}</p>
            <p style={{fontWeight: "bold", color: "#BEBEBE"}}>{data.isNeutered}</p>
            <p style={{fontWeight: "bold", color: "#BEBEBE"}}>{data.age}</p>
            <p style={{fontWeight: "bold", color: "#BEBEBE"}}>{data.weight}kg</p>
          </div>
        </div>
        <div style={{borderBottom: "2px solid #E6E6E6"}}></div>
        <div style={{display: "flex", flexDirection: "column", padding: "15px", gap: "10px"}}>
          <div>
            <p>특징 </p>
            <p style={{fontWeight: "normal", color: "#BEBEBE"}}>{data.characteristics}</p>
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "30px"}}>
            <p>담당자 이름 </p>
            <span style={{fontWeight: "normal", color: "#BEBEBE", fontSize: "14px"}}>{data.ownerName}</span>
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "30px"}}>
            <p>구조된 장소 </p>
            <span style={{fontWeight: "normal", color: "#BEBEBE", fontSize: "14px"}}>{data.rescueDetail}</span>
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "30px"}}>
            <p>품종 </p>
            <span style={{fontWeight: "normal", color: "#BEBEBE", fontSize: "14px"}}>{data.breedName}</span>
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "30px"}}>
            <p>이메일 </p>
            <span style={{fontWeight: "normal", color: "#BEBEBE", fontSize: "14px"}}>{data.email}</span>
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "30px"}}>
            <p>보호소 </p>
            <a href={data.rescuePlaceLink} style={{fontWeight: "normal", color: "#BEBEBE", fontSize: "14px", textDecoration: "underline"}}>{data.rescuePlace}</a>
          </div>
        </div>
      </div>
    </DetailContainer>
  );
};

export default AnimalDetail;
