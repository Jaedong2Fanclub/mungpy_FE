import PostItem from "./PostItem";
import { post } from "../../mock/post";
import styled from "styled-components";

const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px;
    border-bottom: 1px solid #eee;
`;

const PostContainer = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {post.map((item) => (
                <PostWrapper key={item.postId}>
                    <PostItem {...item} />
                </PostWrapper>
            ))}
        </div>
    )
}   

export default PostContainer;