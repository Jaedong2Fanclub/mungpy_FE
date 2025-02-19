import styled from "styled-components";
import HambugerBar from "./hambugerBar";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
    width: 390px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FEF7FF;
`
const P = styled.p`
    color : #3F3F3F;
    font-size: 18px;
    font-weight : 800;
    cursor : pointer;
    pointer-events: auto;
    z-index: 2;
    margin: 0;
`

const Header = () => {
    const navigate = useNavigate();
    return (
        <Box>
            <P onClick={() => navigate('/home')}>MUNGPY</P>
            <HambugerBar/>
        </Box>
    )
}

export default Header;