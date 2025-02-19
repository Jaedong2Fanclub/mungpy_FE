import { useState } from "react";
import AddressInput from "../postcode/addresssInput"
import { AgreementOption, SignupProps } from "../../constants/interface";
import {useForm, SubmitHandler} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import * as E from "../../constants/formRequitements"
import axios from "axios";
import Input from "../Input/input";
import { Error, ModalStyles, InputWrapper, PasswordStrength, OverlayStyles } from "./joinStyle";
import Button from "../Button/button";
import Modal from "../Modal/modal";
import "./style.scss"

const initialAgreementOptions: AgreementOption[] = [
  { label: <span>[필수] <span className="highlight">서비스 이용 약관</span>에 동의합니다.</span>, isRequired: true, checked: false },
  { label: <span>[필수] <span className="highlight">개인정보수집 및 이용</span>에 동의합니다.</span>, isRequired: true, checked: false },
  { label: <span>[선택] <span className="highlight">마케팅 활용 동의</span> 및 광고 수신에 <br />동의합니다.</span>, isRequired: false, checked: false },
];

const Join = () => {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
    getValues,
    setValue,
    watch
  } = useForm<SignupProps>({
    mode: "onChange"
  });

  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idCheckResult, setIdCheckResult] = useState({message : "", type: ""});
  const [zonecode, setZonecode] = useState('');
  const [address, setAddress] = useState('');
  const [marketingAgreed, setMarketingAgreed] = useState(false);
  const [checkedOptions, setCheckedOptions] = useState<AgreementOption[]>(initialAgreementOptions);
  const [detailedAddress, setDetailedAddress] = useState('');

  const { validatePassword, passwordError, validateConfirmPassword, passwordColor} = E.usePasswordValidation(() => getValues("password"));

   // 약관동의 모달
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 약관 동의 핸들러
  const handleCheckboxChange = (index: number) => {
    const updatedOptions = [...checkedOptions];
    updatedOptions[index].checked = !updatedOptions[index].checked;
    setCheckedOptions(updatedOptions);
};

const handleAllCheckedChange = () => {
    const allChecked = !checkedOptions.every(option => option.checked);
    const updatedOptions = checkedOptions.map(option => ({ ...option, checked: allChecked }));
    setCheckedOptions(updatedOptions);
};

// 사업자 번호 입력 시 하이픈 자동 추가
const handleBussinessNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value.replace(/\D/g, "");

  // 하이픈 추가 로직
  if(value.length > 6) {
    value = value.replace(/(\d{3})(\d{2})(\d{5})/, "$1-$2-$3");
  } else if(value.length > 3) {
    value = value.replace(/(\d{3})(\d{2})/, "$1-$2");
  }

  setValue("businessNumber", value);
}

const isAllRequiredChecked = checkedOptions.every(option => !option.isRequired || option.checked);


  // 아이디 중복체크
  const idCheckRes = async (id : string) => {
    if(!id.trim()) {
      setIdCheckResult({message : "아이디를 입력해주세요.", type: "error"});
      return;
    }

    console.log(id);
    try {
      const CheckRes = await axios.get(
        // api 주소
        `/auth/exist/idCheck/${id}`
      );
      if(CheckRes.data.duplicate === true) {
        setIdCheckResult({message : "이미 사용중인 아이디입니다.", type: "error"});
      }
      console.log("사용가능 아이디");
      setIdCheckResult({message : "사용 가능한 아이디입니다.", type: "success"});
    } catch(error) {
      setIdCheckResult({message : "중복된 아이디입니다.", type: "error"});
    }
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setIdCheckResult(e.target.value);
    setIdCheckResult({message : "", type: ""});
  };

  const onSubmitHandler: SubmitHandler<SignupProps> = async (data) => {

    const userData = {
      shelterName: data.shelterName,
      id : data.id,
      address: `${address} ${detailedAddress}`,
      zonecode: zonecode,
      name : data.name,
      businessNumber: data.businessNumber,
      password: data.password,
      marketingAgreed: marketingAgreed
    }

    if (!data.id || !data.password || !data.passwordConfirm || !data.shelterName || !data.businessNumber || !address) {
      setIsLoading(false);
      alert("모든 항목을 채워주세요!");
      return;
  }
  setIsLoading(true);
  try {
      const res = await axios.post(`/api/signup`,userData,{
          headers: {
              "Content-Type": "application/json",
          }
      });
      console.log(res.data,'login success!');
      nav('/login')
  } catch (error) {
      console.log(error);
  }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <InputWrapper>
            <Input
              title="보호소 이름"
              placeholder="보호소명을 입력해주세요."
              type="text"
              {...register("shelterName", {
                required: "보호소명을 입력해주세요!"
              })}
            />
          </InputWrapper>
          {errors.shelterName && <Error>{errors.shelterName.message}</Error>}
        </div>
        <div>
          <InputWrapper>
            <Input
              title="아이디"
              placeholder="아이디를 입력해주세요(8자이내)"
              type="text"
              {...register("id", {
                required : E.idValidation.require,
                maxLength: E.idValidation.maxLength
              })}
              onChange={handleIdChange}
            />
            <span>
              <button 
                type="button" 
                onClick={() => idCheckRes(watch("id"))} 
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #d9d9d9',
                  borderRadius: '10px'
                }}>
                  중복체크
              </button>
            </span>
            {idCheckResult.message && (
              <div className={`id-check-result ${idCheckResult.type}`}>
                {idCheckResult.message}
              </div>
            )}
          </InputWrapper>
          {errors.id && <Error>{errors.id.message}</Error>}
        </div>
        <AddressInput 
          addressState = {{
            zonecode,
            address,
            detailedAddress,
          }}
          addressAction = {{
            setZonecode,
            setAddress,
            setDetailedAddress,
          }}
        />
        <div>
          <InputWrapper>
            <Input
              title="대표자 성함"
              type="text"
              placeholder="대표자 이름을 입력해주세요"
              {...register("name", {
                required: "성함을 입력해주세요!",
              })}
            />
          </InputWrapper>
          {errors.name && <Error>{errors.name.message}</Error>}
        </div>
        <div>
          <InputWrapper>
          <Input
            title="사업자 번호/인증 번호"
            type="text"
            placeholder="사업자 번호를 입력해주세요"
            value={watch("businessNumber")}
            {...register("businessNumber", {
              required: "사업자 번호를 입력해주세요",
              validate: {
                isValidBusinessNumber: value => 
                  E.BusinessNumberValid(value) || "올바른 사업자 번호를 입력해주세요"
              }
            })}
            onChange={handleBussinessNumberChange}
            />
          </InputWrapper>
          {errors.businessNumber && <Error>{errors.businessNumber.message}</Error>}
        </div>
        <div>
            <InputWrapper>
                <Input
                    title="비밀번호 (8자 이상)"
                    placeholder="비밀번호를 입력해주세요 (8자리 이상)"
                    type="password"
                    {...register("password", {
                        required: '비밀번호를 입력하세요',
                        validate: validatePassword
                    })}
                />
            </InputWrapper>
            {errors.password && <Error>{errors.password.message}</Error>}
            {!errors.password && passwordError && <PasswordStrength color={passwordColor}>{passwordError}</PasswordStrength>}
        </div>
        <div>
            <InputWrapper>
                <Input
                    placeholder="비밀번호를 다시 입력해주세요"
                    type="password"
                    {...register("passwordConfirm", {
                        required: '비밀번호 확인을 입력하세요',
                        validate: validateConfirmPassword
                    })}
                />
                {/* {errors.passwordConfirm && <ErrorIcon/>} */}
            </InputWrapper>
            {errors.passwordConfirm && <Error>{errors.passwordConfirm.message}</Error>}
        </div>
        <div className="agreement-section">
            <p>약관동의<span className="required">*</span></p>
            <div className="checkbox-container">
              <input 
                  type="checkbox"
                  id="all-agree"
                  checked={checkedOptions.every((option) => option.checked)}
                  onChange={handleAllCheckedChange}
                  className="custom-checkbox"
              />
              <label htmlFor="all-agree">
                <span className="checkbox-icon"></span>
                모두 동의합니다.
              </label>
            </div>
            <hr/>
            {checkedOptions.map((option, index) => (
              <div key={index} className="checkbox-container">
                  <input
                      type="checkbox"
                      id={`checkbox-${index}`}
                      checked={option.checked}
                      onChange={() => handleCheckboxChange(index)}
                      className="custom-checkbox"
                  />
                  <label htmlFor={`checkbox-${index}`}>
                    <span className="checkbox-icon"></span>
                    {option.label}
                  </label>
              </div>
            ))}
          </div>
        <Button type="submit" variant="submit" disabled={!isAllRequiredChecked}>회원가입</Button>
      </form>
    </div>
  )
}

export default Join;