import { useNavigate } from "react-router-dom";
import Button from "../../button/button";
import { useEffect, useState } from "react";
import axios from "axios";
import "./mungpy_mainStyle.scss";
import Mungpy from "../../../img/mainDog.svg"


const Mungpy_Main = () => {
  const navigate = useNavigate();
  const [participants, setParticipants] = useState(0);

  function NextPage() {
    navigate("/matching");
  }

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/person`)
    .then((res) => {
      setParticipants(res.data.count);
    }).catch((error)=> {
      console.error("참여자 수 조회 실패:", error);
    })
  },[]);

  return (
    <div className="container">
      <section className="title">
        <p>신규 유형 테스트</p>
        <h4>나는 어떤 동물을 닮았을까?</h4>
      </section>
      <img src={Mungpy} alt="mungpy"/>
      <section className="subtitle">
        <p className="text">이미지를 업로드하여 나와 닮은 <br/> 메이트를 찾아드려요!</p>
        <p className="participants">{participants}명 참여했어요</p>
      </section>
      <Button type="submit" variant={"submitBtn"} onClick={NextPage} className="button">테스트 시작하기</Button>
    </div>
  )
}

export default Mungpy_Main;