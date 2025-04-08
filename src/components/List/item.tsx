import {useNavigate} from "react-router-dom";
import styled from "styled-components";

interface dataProps {
    id: number;
    title:string;
    subtitle: string;
    image: string;
}

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


const AnimalFindItem:React.FC<dataProps> = ({id, title, subtitle, image}) => {
    const nav = useNavigate();
    const handleSelect = () => {
        nav(`${process.env.REACT_APP_BASE_URL}/api/animals`);
    };
    return (
        <ItemWrapper onClick={handleSelect}>
          <ItemImg src={image} alt={title} />
          <div style={{ fontWeight: 'bold' }}>{title}</div>
          <div style={{ fontSize: '8px' }}>{subtitle}</div>
        </ItemWrapper>
      );
      
}

export default AnimalFindItem;