import Header from "../component/header/header";
import MyPageComponent from "../component/mypage/myPage";
import styled from "styled-components";

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export default function MyPage() {
    return (
        <Box>
            <Header/>
            <MyPageComponent/>
        </Box>
    )
}

