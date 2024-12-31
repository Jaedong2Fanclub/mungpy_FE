import { useState } from "react";
import styled from "styled-components";
import KakaoLogin from "../../img/kakao_login.png"
import Input from "../Input/input";
import {useForm, SubmitHandler} from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as E  from "../../constants/formRequitements"
import { useDispatch } from "react-redux";
import { SET_TOKEN } from "../../reducer/tokenSlice";

const Error = styled.p`
    color: #FF0001;
    font-size: 8px;
    margin-top : 0.5rem;
    margin-bottom : 0.5rem;
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
`

const ToggleLabels = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const Label = styled.span<{ isActive: boolean }>`
  font-weight: bold;
  font-size: 16px;
  color: ${({ isActive }) => (isActive ? "#FF8C00" : "#ccc")};
`;


const ToggleSlider = styled.span`
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #ccc;
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
  background-color: white;
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
    const res = await axios.post(`api url`, formData, {
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
    navigate('/shelterRegister');
  }

  return (
    <div>
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
      <ToggleSlider/>
    </ToggleSwitch>
    <div>
      {isActive ? (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <Input
          type="text"
            placehloder="아이디 입력"
            {...register("id", {
              required: E.idValidation.require,
              maxLength : E.idValidation.maxLength
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
          <button>로그인</button>
          <div>
            <p onClick={handleShelter}>보호소 등록</p>
            <p onClick={handleIdSearch}>아이디 찾기</p>
            <p onClick={handlePasswordSearch}>비밀번호 찾기</p>
          </div>
        </div>
      </form>
      ): (
        <div>
          <p>SNS 계정으로 로그인</p>
          <img src={KakaoLogin}/>
        </div>
      )}
      </div>
    </div>
  )
}

export default Login;