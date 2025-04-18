import {useNavigate, useLocation} from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "../../img/home.svg";
import { DataProps, ShelterDetailProps } from "../../constants/interface";

const ItemWrapper = styled.div`
  min-width: 100%;
  margin-right: 20px;
  text-align: left;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

const ItemImg = styled.img`
  width: 100px;
  height: 100px;
  flex : 1;
  border-radius: 10px;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex : 2;
`;

const ShelterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
`;

const GenderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
`;

// 타입 가드 함수
const isShelterProps = (props: DataProps | ShelterDetailProps): props is ShelterDetailProps => {
  return 'companyName' in props;
};

const PostItem: React.FC<DataProps | ShelterDetailProps> = (props) => {
  const nav = useNavigate();

  const handleSelect = () => {
    if (!isShelterProps(props)) {
      nav(`/animal/${props.id}`, {
        state: {
          gender: props.gender,
          age: props.age,
          isNeutered: props.isNeutered,
          weight: props.weight,
          rescuePlace: props.rescuePlace,
          rescueDetail: props.rescueDetail,
          breedName: props.breedName,
          ownerName: props.ownerName,
          shelterName: props.shelterName,
          telno: props.telno,
          email: props.email,
          characteristics: props.characteristics,
          name: props.name,
          images: props.images,
          rescuePlaceLink: props.rescuePlaceLink,
        }
      });
    } else {
      nav(`/shelter/${props.id}`, {
        state: {
          shelterName: props.shelterName,
          companyName: props.companyName,
          address: props.address,
          link: props.link,
          telno: props.telno,
          email: props.email,
          description: props.description,
          image: props.image,
          lat: props.lat,
          lng: props.lng
        }
      });
    }
  };

  if (isShelterProps(props)) {
    // 보호소 정보 렌더링
    return (
      <ItemWrapper onClick={handleSelect}>
        <ItemImg src={props.image} alt={props.shelterName} />
        <TextWrapper>
          <div style={{ fontWeight: 'bold' }}>
            <p>{props.shelterName}</p>
            <ShelterWrapper>
              <img src={HomeIcon} alt="home" style={{width: "15px", height: "15px"}} />
              <p style={{fontSize: "11px", color: "#818181", fontWeight: "normal"}}>운영 : {props.companyName}</p>
            </ShelterWrapper>
            <p style={{fontSize: "11px", color: "#818181", fontWeight: "normal"}}>{props.address}</p>
          </div>
        </TextWrapper>
      </ItemWrapper>
    );
  }

  // 동물 정보 렌더링
  return (
    <ItemWrapper onClick={handleSelect}>
      <ItemImg src={props.images[0]} alt={props.breedName} />
      <TextWrapper>
        <div style={{ fontWeight: 'bold' }}>
          <p>{props.breedName}</p>
          <ShelterWrapper>
            <img src={HomeIcon} alt="home" style={{width: "15px", height: "15px"}} />
            <p style={{fontSize: "11px", color: "#818181", fontWeight: "normal"}}>{props.shelterName}</p>
          </ShelterWrapper>
          <GenderWrapper>
            <p style={{fontSize: "11px", color: "#818181", fontWeight: "normal"}}>{props.gender}</p>
            <p style={{fontSize: "11px", color: "#818181", fontWeight: "normal"}}>({props.isNeutered})</p>
            <p style={{fontSize: "11px", color: "#818181", fontWeight: "normal"}}>{props.age}</p>
            <p style={{fontSize: "11px", color: "#818181", fontWeight: "normal"}}>{props.weight}</p>
          </GenderWrapper>
        </div>
      </TextWrapper>
    </ItemWrapper>
  );
};

export default PostItem;