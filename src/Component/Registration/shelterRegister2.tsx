import { useState } from "react"
import Input from "../Input/input"
import Button from "../Button/button";

const ShelterRegister2 = ({
  onSubmit
}: {
  onSubmit: (data: {
    character: string;
    savior: string;
    location: string;
    breed : string;
    email: string;
    shelter: string;
  }) => void;
}) => {
  const [character, setCharacter] = useState<string>("");
  const [savior, setSavior] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [breed, setBreed] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [shelter, setShelter] = useState<string>("");

  const handleSubmit = () => {
    if (!character || !savior || !location || !email || !shelter) {
      alert("모든 필드를 입력해주세요.");
      return;
    }
    onSubmit({ character, savior, location, breed, email, shelter });
  }
  return (
    <div>
      <div>
        <p>특징</p>
        <textarea typeof="text" placeholder="특징을 적어주세요(최대 300자 이내)" value={character} onChange={(e) => setCharacter(e.target.value)}></textarea>
      </div>
      <div>
        <p>담당자 성명</p>
        <Input placeholder="이름을 적어주세요" type="text" size="small" value={savior} onChange={(e:any) => setSavior(e.target.value)}/>
      </div>
      <div>
        <p>구조된 장소</p>
        <Input placeholder="구조장소를 적어주세요" type="text" size="small" value={location} onChange={(e:any) => setLocation(e.target.value)}/>
      </div>
      <div>
        <p>품종</p>
        {/* 품종 리스트 보여주기 */}
      </div>
      <div>
        <p>이메일</p>
        <Input placeholder="이메일을 적어주세요" type="email" size="small" value={email} onChange={(e:any) => setEmail(e.target.value)}/>
      </div>
      <div>
        <p>보호소 선택</p>
        {/* 보호소 리스트 보여주기 */}
      </div>
      <Button onClick={handleSubmit}>동물 등록</Button>
    </div>
  )
}

export default ShelterRegister2;