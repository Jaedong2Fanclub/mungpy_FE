import Input from "../input/input";
import styled from "styled-components";
import TextAreaWithCounter from "../textArea/textArea";
import BreedSelector from "../dropdown/breedDropdown";
import * as E from "../../constants/formRequitements"
import { useForm } from "react-hook-form";
import { Error } from "../join/joinStyle";
import ShelterSelector from "../../utils/ShelterSeletor";
import { useState } from "react";

const P = styled.p`
  font-weight: 600;
  font-size: 14px;
`

const Required = styled.span`
  color: red;
`

const Button = styled.button`
  background-color : #FF7920;
  width: 100%;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 700;
  height: 60px;
`

interface FormData {
  character: string;
  savior: string;
  location: string;
  breed : string;
  email: string;
  shelter: string;
}

const ShelterRegister2 = ({ onSubmit }: { onSubmit: (data: FormData) => void;}) => {
  const {
    register, handleSubmit, setValue, watch, formState: {errors}
  } = useForm<FormData>();

  const [text, setText] = useState("");

  const handleTextChange = (value:string) => {
    setText(value);
  }

  const handleBreedSelect = (breed:string) => {
    setValue("breed", breed);
    console.log("select breed", breed);
  }

  const handleShelterSelect = (shelter:string) => {
    setValue("shelter", shelter);
    console.log("select shelter", shelter);
  }

  const submitHandler = (data: FormData) => {
    if (!data.character || !data.savior || !data.location || !data.email || !data.shelter) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    onSubmit(data);
    console.log("shlter2 : ", data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div style={{padding: '20px 20px 0px 20px'}}>
        <div>
          <P>특징<Required>*</Required></P>
          <TextAreaWithCounter
            maxLength={300}
            value={watch("character") || ""}
            placeholder="특징"
            register={register("character", {required: "특징을 입력해주세요!"})}
          />
          {errors.character && <Error>{errors.character.message}</Error>}
        </div>
        <div style={{marginTop: '1rem'}}>
          <Input 
            title="담당자 성명"
            placeholder="이름을 적어주세요" 
            type="text" 
            {...register("savior", {required: "담당자 이름을 입력해주세요!"})}
          />
            {errors.savior && <Error>{errors.savior.message}</Error>}
        </div>
        <div style={{marginTop: '1rem'}}>
          <Input 
            title="구조된 장소"
            placeholder="구조장소를 적어주세요" 
            type="text"
            {...register("location", {required: "구조 장소를 입력해주세요!"})}
          />
          {errors.location && <Error>{errors.location.message}</Error>}
        </div>
        <div style={{marginTop: '1rem', width: '100%'}}>
          <BreedSelector
            title="품종"
            animalType=""
            onBreedSelect={handleBreedSelect}
          />
        </div>
        <div style={{marginTop: '1rem'}}>
          <Input 
            title="이메일" 
            placeholder="이메일을 적어주세요" 
            type="email" 
            {...register("email", {
              required : E.emailValidtion.required,
              pattern: E.emailValidtion.pattern,
              maxLength: E.emailValidtion.maxLength
            })}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </div>
        <div style={{marginBottom: '1rem'}}>
          <ShelterSelector title="보호소 선택" onSelect={handleShelterSelect}/>
        </div>
        <Button>동물 등록</Button>
      </div>
    </form>
  )
}

export default ShelterRegister2;