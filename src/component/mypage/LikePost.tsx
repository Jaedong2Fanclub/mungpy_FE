import { useSelector } from "react-redux";
import PostItem from "../List/postAnimal";
import { list } from "../../mock/list";
import styled from "styled-components";
import { DataProps } from "../../constants/interface";

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const LikePost = () => {
    const { likedPosts } = useSelector((state: any) => state.authToken);
    console.log("likedPosts:", likedPosts);
    
    // 좋아요 누른 게시물만 필터링하고 DataProps 형식으로 변환
    const likedPostList = list
        .filter(post => likedPosts.includes(post.id))
        .map(post => ({
            ...post,
            rescuePlaceLink: "#"
        })) as DataProps[];
    console.log("likedPostList:", likedPostList);

    return (
        <Container>
            <Title>좋아요 누른 동물</Title>
            {likedPostList.length > 0 ? (
                <PostItem data={likedPostList} />
            ) : (
                <p>좋아요를 누른 게시물이 없습니다.</p>
            )}
        </Container>
    );
}

export default LikePost;