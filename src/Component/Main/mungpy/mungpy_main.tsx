import { useNavigate } from "react-router-dom";
import Button from "../../button/button";
import { useEffect, useState } from "react";
import axios from "axios";
import Dog from "../../../img/sohi_dog.png";
import Dog2 from "../../../img/sohi2_dog.png";
import Dog3 from "../../../img/sohi3_dog.png";
import "./mungpy_mainStyle.scss";

const Mungpy_Main = () => {
  const navigate = useNavigate();
  const [participants, setParticipants] = useState(0);

  function NextPage() {
    navigate("/matching");
  }

  useEffect(() => {
    axios.get('/person')
    .then((res) => {
      setParticipants(res.data.participants);
    }).catch((error)=> {
      console.log("fail");
    })
  },[]);

  return (
    <div className="container">
      <section className="title">
        <p>신규 유형 테스트</p>
        <h4>나는 어떤 동물을 닮았을까?</h4>
      </section>
      <div className="dog-container">
        <div className="square light-yellow"></div>
        <div className="square red"></div>
        <div className="square blue"></div>
        <div className="square deep-blue">
          <img src={Dog} alt="Dog Face"/>
        </div>
        <div className="square yellow">
          <img src={Dog2} alt="Dog with Bone"/>
        </div>
        <div className="square green">
          <img src={Dog3} alt="Dog Face"/>
        </div>
      </div>
      <section className="subtitle">
        <p className="text">이미지를 업로드하여 나와 닮은 <br/> 메이트를 찾아드려요!</p>
        <p className="participants">{participants}명 참여했어요</p>
      </section>
      <Button type="submit" variant={"submitBtn"} onClick={NextPage} className="button">테스트 시작하기</Button>
    </div>
  )
}

export default Mungpy_Main;