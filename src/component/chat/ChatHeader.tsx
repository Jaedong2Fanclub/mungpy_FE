import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #EDEDED;
    align-items: center;
    flex-shrink: 0;
`

export default function ChatHeader({children}: {children: React.ReactNode}) {
    const navigate = useNavigate();
    return (
        <HeaderWrapper>
            <IoChevronBack onClick={() => navigate(-1)} style={{ width: '30px', height: '30px', position: 'absolute', left: '10px'}}/>
            {children}
        </HeaderWrapper>
    )
}