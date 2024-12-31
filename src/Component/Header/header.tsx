import React from "react";
import styled from "styled-components";
import logo from '../../img/sfzLogo.png'
import HambugerBar from "./hambugerBar";

const Box = styled.div`
    width: 390px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FEF7FF;
`

const Header = () => {
    return (
        <Box>
            <p>멍피</p>
            <HambugerBar/>
        </Box>
    )
}

export default Header;