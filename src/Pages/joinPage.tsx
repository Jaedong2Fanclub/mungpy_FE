import { useNavigate } from "react-router-dom";
import Join from "../component/Join/join";
import {IoIosArrowBack} from 'react-icons/io';
import '../Styles/joinStyle.scss';

const JoinPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }
  return (
    <div className="join-container">
      <div className="header-box">
        <IoIosArrowBack className="back-icon" onClick={goBack}/>
        <header>보호소 등록</header>
      </div>
      <div className="line"></div>
      <Join/>
    </div>
  )
}

export default JoinPage;