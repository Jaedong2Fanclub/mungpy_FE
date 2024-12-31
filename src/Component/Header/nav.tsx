import { MenuItem } from "./items";
import { Ul } from './HeaderStyle';
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_TOKEN } from "../../reducer/tokenSlice";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const getItems = (
    username: string | null,
    navigate: (path:string) => void,
    Logout: () => void
) => [
    {id : "0", text: username ? `${username}님` : '로그인해주세요', onClick: () => navigate(username ? "" : '/login')},
    { id: "1", text: "홈", onClick: () => navigate("/home")},
    { id: "2", text: "등록된 동물", onClick: () => navigate("/animalSearch")},
    { id: "3", text: "유기견/묘 등록", onClick: () => navigate("/animalRegister") },
    { id: "4", text: "보호소 리스트", onClick: () => navigate("/shelterRegister")},
    { id: "5", text: "커뮤니티", onClick: () => navigate("/community")},
  ...(username
    ? [{ id : "6", text: "마이페이지", onClick: () => navigate("/myPage")},
    { id : "7", text: "로그아웃", onClick: () => Logout()}] : []
    )
  ]

export const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {username, profileImage} = useSelector((state:any) => state.authToken);

  const Logout = () => {
    dispatch(DELETE_TOKEN());
    console.log("logout");
  }

  const Items = getItems(username, navigate, Logout);

 return (
    <>
      <Ul variants={variants}>
        {Items.map((item:any) => (
          <MenuItem id={item.id} key={item.id} text={item.text} onClick={item.onClick}/>
        ))}
      </Ul>
    </>
)
}