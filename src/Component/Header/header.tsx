import React from "react";
import styled from "styled-components";
import logo from '../../img/sfzLogo.png'

const Box = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Img = styled.img`
    width : 150px;
    height : 150px;
`

const Header = () => {
    return (
        <Box>
            <Img src={logo}/>
            <span>로그인</span>
        </Box>
    )
}

export default Header;