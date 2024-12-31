import { useState } from "react";
import SelectionBar from "../Button/selectionBar";
import Input from "../Input/input"
import AnimalImgUpload from "./animalImgUpload"
import { UploadedImage } from "../../constants/interface";

const genderList = [
  {id : "1", name: "수컷", value: "male"},
  {id : "2", name : "암컷", value: "female"}
]

const neuteringList = [
  {id: "1", name: "안함", value: "none"},
  {id: "2", name: "예정", value: "planned"},
  {id: "3", name: "완료", value: "finish"},
]

const ShelterRegister1 = ({
  onNext
}: {
  onNext: (data: {
    gender: string;
    neutering: string;
    age: number;
    weight: number;
    name: string;
    images: UploadedImage[];
  }) => void;
}) => {
  const [animalName, setAnimalName] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedNeutering, setSelectedNeutering] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [weight, setWeight] = useState<number | "">("");
  const [images, setImages] = useState<UploadedImage[]>([]);

  const handleGenderSelectoin = (gender: string) => {
    setSelectedGender(gender);
    console.log("gender : ", gender);
  }

  const handleNeuteringSelection = (neutering: string) => {
    setSelectedNeutering(neutering);
    console.log("neutering : ", neutering);
  }

  const handleNext = () => {
    if(!selectedGender ||
      !selectedNeutering ||
      !age ||
      !weight ||
      !animalName ||
      images.length === 0) {
      alert("모든 필드를 입력해주세요.");
      return;
    }
    onNext({
      gender: selectedGender,
      neutering: selectedNeutering,
      age: Number(age),
      weight: Number(weight),
      name : animalName,
      images
    });
  }

  return (
    <div>
      <AnimalImgUpload onUpload={setImages}/>
      <div>
        <p>보호견/보호묘 이름</p>
        <Input
        type="text"
        placeholder="이름을 적어주세요"
        value={animalName}
        onChange={(e:any) => setAnimalName(e.target.value)}
        />
      </div>
      <div>
        <p>성별</p>
        <SelectionBar 
          list={genderList}
          selectedValue="active"
          onSelect={handleGenderSelectoin}
          name="gender"/>
      </div>
      <div>
        <p>중성화</p>
          <SelectionBar
          list={neuteringList}
          selectedValue="active"
          onSelect={handleNeuteringSelection}
          name="neutering"
          />
      </div>
      <div>
        <p>나이</p>
        <Input
          type="text"
          placeholder="나이를 적어주세요"
          value={age}
          onChange={(e:any) => setAge(Number(e.target.value))}
        />
      </div>
      <div>
        <p>몸무게</p>
        <Input 
          type="text"
          placeholder="몸무게를 적어주세요"
          value={weight}
          onChange={(e:any) => setWeight(Number(e.target.value))}
        />
      </div>
      <button onClick={handleNext}>다음</button>
    </div>
  )
}

export default ShelterRegister1;