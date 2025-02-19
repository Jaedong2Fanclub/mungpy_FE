import { useState } from "react";
import SelectionBar from "../button/selectionBar";
import Input from "../input/input"
import AnimalImgUpload from "./animalImgUpload"
import { UploadedImage } from "../../constants/interface";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Error } from "../join/joinStyle";

const P = styled.p`
  font-weight: 600;
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

const genderList = [
  {id : "1", name: "수컷", value: "male"},
  {id : "2", name : "암컷", value: "female"}
]

const neuteringList = [
  {id: "1", name: "안함", value: "none"},
  {id: "2", name: "예정", value: "planned"},
  {id: "3", name: "완료", value: "finish"},
]

interface FormData {
  gender: string;
  neutering: string;
  age: number;
  weight: number;
  name: string;
  images: UploadedImage[];
}

const ShelterRegister1 = ({ onNext }: { onNext: (data: FormData) => void; }) => {
  const {
    register, handleSubmit, setValue, watch,formState: {errors}
  } = useForm<FormData>();

  const [images, setImages] = useState<UploadedImage[]>([]);

  // 이미지 업로드 처리
  const handleImageUpload = (uploadedImages: UploadedImage[]) => {
    setImages(uploadedImages);
    setValue("images", uploadedImages); // useForm의 데이터에 images 추가
  };

  const handleGenderSelectoin = (gender: string) => {
    setValue("gender", gender);
    console.log("gender : ", gender);
  }

  const handleNeuteringSelection = (neutering: string) => {
    setValue('neutering', neutering);
    console.log("neutering : ", neutering);
  }

  const handleNext = (data: FormData) => {
    if(!data.gender || !data.neutering || !data.age || !data.weight ||!data.name) {
      alert("모든 필드를 입력해주세요.");
      return;
    }
    if(!data.images || data.images.length === 0) {
      alert("이미지를 업로드해주세요");
    }

    onNext(data);
    console.log("shelter1 : ",data);
  }

  return (
    <form onSubmit={handleSubmit(handleNext)}>
      <div style={{padding: '20px 20px 0px 20px'}}>
        <AnimalImgUpload onUpload={handleImageUpload}/>
        <div>
          <Input
          title="보호견/보호묘 이름"
          type="text"
          placeholder="임시 이름을 적어주세요"
          {...register("name", {required: "이름을 작성해주세요!"})}
          />
          {errors.name && <Error>{errors.name.message}</Error>}
        </div>
        <div style={{marginTop: '1rem'}}>
          <P>성별<span style={{color:"red"}}>*</span></P>
          <SelectionBar 
            list={genderList}
            selectedValue={watch("gender")}
            onSelect={handleGenderSelectoin}
            name="gender"
          />
        </div>
        <div style={{marginTop: '1rem'}}>
          <P>중성화<span style={{color:"red"}}>*</span></P>
          <SelectionBar
            list={neuteringList}
            selectedValue={watch("neutering")}
            onSelect={handleNeuteringSelection}
            name="neutering"
          />
        </div>
        <div style={{marginTop: '1rem'}}>
          <Input
            title="나이"
            type="text"
            placeholder="나이를 적어주세요"
            {...register('age', {
              required: "나이를 입력해주세요!",
              pattern: { value: /^[0-9]+$/, message: "숫자만 입력해주세요!"}
            })}
          />
          {errors.age && <Error>{errors.age.message}</Error>}
        </div>
        <div style={{marginTop: '1rem', marginBottom: '1rem'}}>
          <Input 
            title="몸무게"
            type="text"
            placeholder="몸무게를 적어주세요"
            {...register('weight', {
              required: "몸무게를 입력해주세요!",
              pattern: { value: /^[0-9]+$/, message: "숫자만 입력해주세요!"}
            })}
          />
          {errors.weight && <Error>{errors.weight.message}</Error>}
        </div>
        <Button>다음</Button>
      </div>
    </form>
  )
}

export default ShelterRegister1;