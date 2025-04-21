import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";


const WriteContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 10px;
    background-color: #FF7920;
    border-radius: 30px;
    position: fixed;
    bottom: 0;
    width: 110px;
    z-index: 1000;
    align-items: center;
    justify-content: center;
    right: 0;
    height: 40px;
    color: white;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 10px;
`

const Span = styled.span`
    font-size: 14px;
    font-weight: normal;
    color: white;
`

const WriteButton = () => {
    const navigate = useNavigate();
    return (
        <WriteContainer onClick={() => navigate('write')}>
            <FaPlus />
            <Span>글쓰기</Span>
        </WriteContainer>
    )
}

export default WriteButton;