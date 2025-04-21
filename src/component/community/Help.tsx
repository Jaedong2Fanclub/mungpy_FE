import styled from "styled-components";
import PostContainer from "./postContainer";
import WriteButton from "./write";

const HelpContainer = styled.div`
    height: calc(100vh - 200px);
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`
const Help = () => {
    return (
        <HelpContainer>
            <PostContainer />
            <WriteButton />
        </HelpContainer>
    )
}

export default Help;