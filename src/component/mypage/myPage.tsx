import adoptDog from "../../img/adoptionDog.svg";
import postImg from "../../img/postImg.svg";
import chatImg from "../../img/chatImg.svg";
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import editImg from "../../img/editImg.svg";
import { useEffect, useState } from "react";
import { UPDATE_INTRODUCE } from "../../reducer/tokenSlice";
import PostItem from "../List/findAnimalList";
import { list } from "../../mock/list";
import EditModal from "./EditModal";
import { useNavigate } from "react-router-dom";

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 20px;
  justify-content: left;
  align-items: left;
  padding: 20px;
  border: 1px solid #ebebeb;
  background-color: #f8f8f8;
  border-radius: 13px;
`;

const Li = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: row;
  height: 100px;
  width: 100%;
  border: 1px solid #ebebeb;
  background-color: #f8f8f8;
  border-radius: 13px;
  padding: 20px;
  width: 100%;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-direction: column;
    flex: 1;
`;

const UserInfoImg = styled.div`
    height: 70px;
    width: 70px;
`;

const P = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: #000000;
  margin: 0;
`;

const MyPageComponent = () => {
    const dispatch = useDispatch();
    const { username, profileImage, userIntroduce } = useSelector((state:any) => state.authToken);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
      setPosts(list);
    }, []);

    const handleEdit = () => {
        setIsModalOpen(true);
    };

    const handleSave = (newIntroduce: string) => {
        dispatch(UPDATE_INTRODUCE(newIntroduce));
    };

    return (
      <div style={{ width: "100%" }}>
        <div
          style={{
            gap: "10px",
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          <UserInfoWrapper>
            <UserInfoImg>
              <img
                src={profileImage}
                alt="사용자 프로필"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            </UserInfoImg>
            <UserInfo>
              <p>{username}</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <button
                  style={{
                    border: "none",
                    background: "none",
                    width: "20px",
                    height: "20px",
                  }}
                  onClick={handleEdit}
                >
                  <img src={editImg} alt="수정" />
                </button>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "normal",
                    color: "#424242",
                    margin: 0,
                  }}
                >
                  {userIntroduce}
                </p>
              </div>
            </UserInfo>
          </UserInfoWrapper>
          <Ul>
            <Li onClick={() => navigate("/likeAnimals")}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  flexDirection: "row",
                }}
              >
                <img src={adoptDog} alt="입양 동물" />
                <P>좋아요 누른 동물</P>
              </div>
              <FaAngleRight style={{ color: "#9C9C9C" }} />
            </Li>
            <Li onClick={() => navigate("/mypage/post")}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  flexDirection: "row",
                }}
              >
                <img src={postImg} alt="게시물" />
                <P>작성한 게시물</P>
              </div>
              <FaAngleRight style={{ color: "#9C9C9C" }} />
            </Li>
            <Li>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  flexDirection: "row",
                }}
              >
                <img src={chatImg} alt="채팅 목록" />
                <P>채팅 목록</P>
              </div>
              <FaAngleRight style={{ color: "#9C9C9C" }} />
            </Li>
          </Ul>
        </div>
        <div style={{ marginTop: "30px" }}>
          <p style={{ fontSize: "14px", fontWeight: "normal", color: "#000000" }}>당신에게 어울리는 메이트</p>
          <PostItem data={posts} />
        </div>
        <EditModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          initialText={userIntroduce}
        />
      </div>
    );
}

export default MyPageComponent;
