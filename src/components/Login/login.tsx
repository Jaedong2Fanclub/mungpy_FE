import { useState } from "react";
import styled from "styled-components";
import KakaoLogin from "../../img/kakaoButton.png"
import Input from "../Input/input";
import {useForm, SubmitHandler} from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as E  from "../../constants/formRequitements"
import { useDispatch } from "react-redux";
import { SET_TOKEN } from "../../reducer/tokenSlice";
import "./style.scss"
import Button from "../button/button";
import NaverLogin from "../../img/naverButton.png"
import SitDog from "../../img/sitDog.svg"
import Logo from "../../img/mungpyLogo.svg";
import UpDog from "../../img/upDog.svg";

const Error = styled.p`
    color: #FF0001;
    font-size: 8px;
    margin-bottom : 0.5rem;
    padding-left : 0.5rem;
`;

const PasswordStrength = styled.p<{ color: string }>`
    font-size: 0.75rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    color: ${({ color }) => color};
`;


const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 47.7px;
  height: 23.33px;
  top: -40px;
`

const ToggleLabels = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Label = styled.span<{ isActive: boolean }>`
  font-weight: bold;
  font-size: 16px;
  color: ${({ isActive }) => (isActive ? "#FF8C00" : "#ccc")};
`;


const ToggleSlider = styled.span<{isActive: boolean}>`
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: ${({ isActive }) => isActive ? "#FF7920" : "#4E4E4E"};
-webkit-transition: .4s;
transition: .4s;
border-radius: 34px;

&:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 4px;
  bottom: 4px;
  background-color: ${({ isActive }) => isActive ? "white" : "#6F6F6F"};
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}
`

const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${ToggleSlider} {
    background-color: #ED6A2C;
  }

  &:focus + ${ToggleSlider} {
    box-shadow: 0 0 1px #2196F3;
  }

  &:checked + ${ToggleSlider}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const OAuthButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const PageWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr; // 헤더 고정, 아래 유동
  min-height: 100vh;
  width: 100%;
  overflow: hidden; // 아래에서만 스크롤
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
`;

const ContentSection = styled.div`
  overflow-y: auto;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 360px;
  margin: 1.5rem 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #ccc;
  }

  span {
    padding: 0 10px;
    font-size: 14px;
    color: #666;
    white-space: nowrap;
  }
`;



interface LoginProps {
  id : string;
  password : string;
}

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [meg, setMsg] = useState("");
  const [isActive, setIsActive] = useState(false);
  const {
    register, handleSubmit,getValues,formState: {errors},
  } = useForm<LoginProps>({
    mode: "onChange",
    defaultValues: {
      id: "",
      password: ""
    },
  });

  function JoinPage() {
    navigate('/join');
  }

  const Kakao_login = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_BASE_URL}/auth/kakao/callback&response_type=code`
  }

  const Naver_login = () => {
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&state=${process.env.REACT_APP_NAVER_STATE}&redirect_uri=${process.env.REACT_APP_BASE_URL}/auth/naver/callback`
  }

  const { validatePassword, passwordError, validateConfirmPassword, passwordColor} = E.usePasswordValidation(() => getValues("password"));

  const onSubmitHandler: SubmitHandler<LoginProps> = async (data) => {
    console.log(data);
    setIsLoading(true);
    const formData = {
      id : data.id,
      password : data.password
    };

    if(!data.id || !data.password) {
      console.log("모든 필수 입력 항목을 채워주세요!");
      alert("모든 항목을 채워주세요!");
      return;
    }
    try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, formData, {
      headers: {
        withCredentials: true,
      },
    });
      const {username, accessToken, profileImage} = res.data;
      console.log("login success");
      dispatch(SET_TOKEN({username, accessToken, profileImage}));
      setIsLoading(false);
      navigate('/home');
    }
    catch (error) {
      console.log("error: ", error);
    }
  }

  function handlePasswordSearch() {
    navigate('/passwordConfirm');
  }

  function handleIdSearch() {
    navigate('/idConfirm')
  }

  function handleShelter() {
    navigate('/join');
  }

  return (
    <PageWrapper>
      <HeaderSection>
        <img
            src={isActive ? UpDog : SitDog}
          alt="강아지"
          style={{
            height: "160px",  // 💡 이미지를 영역 안에서만 조정
            objectFit: "contain"
          }}
        />
        <img src={Logo} alt="멍피 로고" style={{width: '60%', height: '100px', objectFit: 'contain'}}/>
        <ToggleLabels>
            <Label isActive={!isActive}>일반 회원</Label>
            <Label isActive={isActive}>보호소 회원</Label>
          </ToggleLabels>
        <ToggleSwitch>
          <CheckBox
          type='checkbox'
          checked={isActive}
          onChange={() => setIsActive(!isActive)}
          />
          <ToggleSlider isActive={isActive}/>
        </ToggleSwitch>
      </HeaderSection>
      {/* 컨텐츠 영역 */}
      <ContentSection>
        {isActive ? (
          <form onSubmit={handleSubmit(onSubmitHandler)} style={{ width: '100%', maxWidth: '360px'}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <Input
            type="text"
              placeholder="아이디 입력"
              {...register("id", {
                required: E.idValidation.require,
                validate: E.idValidation.validate
              })}
            />
            {errors.id && <Error>{errors.id.message}</Error>}
            <Input
            type="password"
            placeholder="비밀번호 입력"
            {...register("password", {required: '비밀번호를 입력하세요',validate: validatePassword})}
            />
            {errors.password && <Error>{errors.password.message}</Error>}
            {!errors.password && passwordError && <PasswordStrength color={passwordColor}>{passwordError}</PasswordStrength>}
            <Button type="submit" variant="submit">로그인</Button>
            <div style={{display: "flex", justifyContent: 'space-between', fontSize: 'small', color : '#838383'}}>
              <p onClick={handleShelter}>보호소 등록 {'>'}</p>
              <div style={{display: 'flex', gap: '20px'}}>
                <p onClick={handleIdSearch}>아이디 찾기</p>
                <p onClick={handlePasswordSearch}>비밀번호 찾기</p>
              </div>
            </div>
          </div>
        </form>
        ): (
          <div style={{width: "100%", maxWidth: "360px", display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <Divider>
              <span>SNS 계정으로 로그인</span>
            </Divider>
            <OAuthButton onClick={Kakao_login}>
              <img src={KakaoLogin} alt="카카오 로그인" style={{height: '50px'}}/>
            </OAuthButton>
            <OAuthButton onClick={Naver_login}>
              <img src={NaverLogin} alt="네이버 로그인" style={{ height: '50px'}}/>
            </OAuthButton>
        </div>
        )}
      </ContentSection>
    </PageWrapper>
  )
}

export default Login;