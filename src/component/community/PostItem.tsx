import { useState } from 'react';
import styled from 'styled-components';
import HoverHeartIcon from "../../img/hoverHeart.svg";
import HeartIcon from "../../img/heart.svg";
import { IoShareSocialOutline } from "react-icons/io5";
import ShareContainer from '../share/ShareContainer';
import { PostItemProps } from '../../constants/interface';
import { useNavigate } from 'react-router-dom';

const P = styled.p`
    font-size: 10px;
    font-weight: 400;
    color: #424242;
    margin: 0;
`

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding: 0px 30px;
    justify-content: flex-end;
    margin-top: 10px;
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    color: #666;
    font-size: 14px;

    img, svg {
        width: 20px;
        height: 20px;
    }

    &:hover {
        color: #FF7920;
        svg {
            color: #FF7920;
        }
    }
`;

const Span = styled.span`
    color: ${props => props.color};
    font-size: 14px;
`;

const PostItem = ({ userImage, userName, userDescription, postImages, postTitle, postContent, postDate, postLike, postComment, postView, postId, comments }: PostItemProps) => {
    const [clicked, setClicked] = useState(false);
    const [likeCount, setLikeCount] = useState(postLike);
    const { handleShare, shareClicked } = ShareContainer({data: {userImage, userName, userDescription, postImages, postTitle, postContent, postDate, postLike, postComment, postView, postId, comments}});
    const navigate = useNavigate();
    const handleClick = () => {
        setClicked(!clicked);
        setLikeCount(prev => clicked ? prev - 1 : prev + 1);
    }

    return (
        <div onClick={() => navigate(`/community/${postId}`)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexDirection: 'row', padding: '10px', width: '100%' }}>
                <img src={userImage} alt="userImage" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}/>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '3px'}}>
                    <P style={{ fontWeight: 'bold', fontSize: '12px' }}>{userName}</P>
                    <P>{userDescription}</P>
                </div>
                {postDate && <P>{postDate}</P>}
            </div>
            <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <P style={{ fontWeight: 'bold', fontSize: '12px' }}>{postTitle}</P>
                <P>{postContent}</P>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', overflowX: 'auto', scrollbarWidth: 'none' }}>
                    {postImages.map((image, index) => (
                        <img key={index} src={image} alt="postImage" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '10px' }}/>
                    ))}
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', padding: '10px' }}>
                <P>좋아요 {likeCount}</P>
                <P>댓글 {postComment}</P>
                <P>조회수 {postView}</P>
            </div>
            <IconContainer>
                <IconWrapper onClick={handleClick}>
                    {clicked ? <img src={HoverHeartIcon} alt="좋아요"/> : <img src={HeartIcon} alt="좋아요"/>}
                    <Span color={clicked ? '#FF7920' : '#666'}>좋아요</Span>
                </IconWrapper>
                <IconWrapper onClick={handleShare}>
                    <IoShareSocialOutline style={{ color: shareClicked ? '#FF7920' : '#666' }}/>
                    <Span color={shareClicked ? '#FF7920' : '#666'}>공유</Span>
                </IconWrapper>
            </IconContainer>
        </div>
    )   
}   

export default PostItem;   