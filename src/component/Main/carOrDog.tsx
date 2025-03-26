import { useState } from "react";
import Dog from "../../img/selectDog.svg";
import Cat from "../../img/selectCat.svg"
import Button from "../button/button";
import "./animalSelectStyle.scss";

interface AnimalSelectorProps {
  onNext: (additionalData: any) => Promise<void>;
}

const AnimalSelector:React.FC<AnimalSelectorProps> = ({onNext}) => {
  const [selectedAnimal, setSelectedAnimal] = useState('');

  const selectAnimal = (type: 'cat' | 'dog') => {
    setSelectedAnimal(type);
  }

  const submitHandle = () => {
    if(!selectedAnimal) {
      alert("동물을 선택해주세요!");
      return;
    }
    onNext({selectedAnimal});
    console.log("동물 선택 : ", selectedAnimal);
  }

  return (
    <div className="box">
      <section>
        <div 
          className={`card ${selectedAnimal === 'dog' ? 'card-selected' : ''}`}
          onClick={() => selectAnimal('dog')}
        >
          <img src={Dog} alt="Dog"/>
          <p className="title">강아지</p>
          <p className="description">집은 그냥 장식일뿐</p>
        </div>
        <div 
          className={`card ${selectedAnimal === 'cat' ? 'card-selected' : ''}`}
          onClick={() => selectAnimal('cat')}
        >
          <img src={Cat} alt="Cat"/>
          <p className="title">고양이</p>
          <p className="description">이불 밖은 위험해...</p>
        </div>
      </section>
      <Button type="submit" variant={'NextBtn'} onClick={submitHandle}>다음</Button>
    </div>
  )
}

export default AnimalSelector;