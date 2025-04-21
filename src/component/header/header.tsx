import styled from "styled-components";
import HambugerBar from "../header/hambugerBar";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../img/mungpyLogo.svg";
import { IoChevronBack } from "react-icons/io5";

const HeaderWrapper = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #EDEDED;
    align-items: center;
    flex-shrink: 0;
    background: #fff8f3;
`

const Header = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    return (
        <HeaderWrapper>
            {pathname !== '/home' && (
                <IoChevronBack onClick={() => navigate(-1)} style={{ width: '30px', height: '30px', position: 'absolute', left: '10px'}}/>
            )}
            <p onClick={() => navigate('/home')} style={{ margin: 0}}>
                <img src={Logo} alt="MUNGPY"/>
            </p>
            <HambugerBar/>
        </HeaderWrapper>
    )
}

export default Header;