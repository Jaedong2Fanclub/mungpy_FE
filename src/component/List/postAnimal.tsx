import PostItem from "./postItem";
import styled from 'styled-components';
import { DataProps, ShelterDetailProps } from "../../constants/interface";
import { useLocation } from "react-router-dom";

interface PostItemProps {
    data: DataProps[] | ShelterDetailProps[];
}

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
  width: 100%;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const PostAnimal: React.FC<PostItemProps> = ({data}) => {
    const pathname = useLocation().pathname;
    const isLikePost = pathname === "/likePost";
    return(
        <ScrollContainer>
            {data.map((item: any) => (
                <PostItem key={item.id} {...item}/>
            ))}
        </ScrollContainer>
    );
};

export default PostAnimal;