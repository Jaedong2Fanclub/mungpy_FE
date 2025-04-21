import { DataProps } from "../../constants/interface";
import AnimaFindlItem from "./item";
import styled from 'styled-components';

interface PostItemProps {
    data: DataProps[];
}

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
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

const PostItem: React.FC<PostItemProps> = ({ data }) => {
  return (
    <ScrollContainer>
      {data.map((item: any) => (
        <AnimaFindlItem image={item.images[0]} {...item} />
      ))}
    </ScrollContainer>
  );
};

export default PostItem;