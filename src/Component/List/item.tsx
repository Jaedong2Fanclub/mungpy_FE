import {useNavigate} from "react-router-dom";

interface dataProps {
    id: number;
    title:string;
    subtitle: string;
    image: string;
}

const AnimalFindItem:React.FC<dataProps> = ({id, title, subtitle, image}) => {
    const nav = useNavigate();
    const handleSelect = () => {
        nav(`/animal/${id}`);
    };
    return(
        <div onClick={handleSelect} style={{marginRight:'20px', textAlign:'left'}}>
            <img src={image} alt={title} style={{width: '140px', height:'140px'}}/>
            <div style={{fontWeight: 'bold'}}>{title}</div>
            <div style={{fontSize: '8px'}}>{subtitle}</div>
        </div>
    )
}

export default AnimalFindItem;