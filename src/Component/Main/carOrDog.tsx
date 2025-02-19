import { useState } from "react";
import Dog from "../../img/sohi2_dog.png";
import Cat from "../../img/sohi3_dog.png"
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
          className={`card ${selectedAnimal === 'cat' ? 'card-selected' : ''}`}
          onClick={() => selectAnimal('cat')}
        >
          <img src={Cat}/>
          <p className="title">고양이</p>
          <p className="description">냥?</p>
        </div>
        <div 
          className={`card ${selectedAnimal === 'dog' ? 'card-selected' : ''}`}
          onClick={() => selectAnimal('dog')}
        >
          <img src={Dog}/>
          <p className="title">강아지</p>
          <p className="description">먕먕!</p>
        </div>
      </section>
      <Button type="submit" variant={'NextBtn'} onClick={submitHandle}>다음</Button>
    </div>
  )
}

export default AnimalSelector;