import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { DataProps } from '../../constants/interface';
const ItemWrapper = styled.div`
  min-width: 140px;
  margin-right: 20px;
  text-align: left;
  flex-shrink: 0;
`;

const ItemImg = styled.img`
  width: 140px;
  height: 140px;
`;

const AnimalFindItem:React.FC<DataProps> = ({id, breedName, gender, age, weight, images, rescueDetail}) => {
    const navigate = useNavigate();
    return (
      <ItemWrapper onClick={() => navigate(`/animal/${id}`)}>
        <ItemImg src={images[0]} alt={breedName} />
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <div style={{ fontWeight: "bold", fontSize: "14px" }}>
            {breedName}
          </div>
          <div
            style={{
              fontSize: "10px",
              color: "#9C9C9C",
              display: "flex",
              flexDirection: "row",
              gap: "5px",
              fontWeight: "normal",
            }}
          >
            <span>{gender} /</span>
            <span>{age} /</span>
            <span>{weight}kg</span>
          </div>
        </div>
      </ItemWrapper>
    );
}

export default AnimalFindItem;