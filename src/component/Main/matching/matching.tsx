import { useState } from "react"
import { ProgressBar } from "../../progressBar/progressBar"
import AnimalSelector from "../carOrDog"
import TraitSelector from "../traitSelector"
import Profile from "../userUploadImg"
import { SubTitle, Title } from "./commonElements"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Loading from "../../loading/loading"

export const Matching = () => {
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(30);
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigator = useNavigate();

  const stages = [
    { title: "사용자님의 이미지를<br/> 첨부해주세요", subTitle: "이미지를 클릭하면 사진을 업로드 할 수 있어요", component: Profile },
    { title: "사용자님의 성향을 <br/>선택해주세요", subTitle: "메이트를 고르는데 중요해요" , component: TraitSelector },
    { title: "사용자님이 원하는 동물을 <br/>선택해주세요", subTitle: "선택한 동물로 결과가 나타나요", component: AnimalSelector }
  ];

  const handleNext = async (additionalData:any) => {
    const newFormData = { ...formData, ...additionalData };
    if (stage < stages.length - 1) {
      setStage(stage + 1);
      setFormData(newFormData);
      setProgress(progress + 30);
    } else {
      const finalFormData = new FormData();
      finalFormData.append('user_image', newFormData.imageFile);
      finalFormData.append('user_traits', JSON.stringify(newFormData.selectedTraits));
      finalFormData.append('type', newFormData.selectedAnimal);
      console.log("매칭 image : ",newFormData.imageFile);
      console.log("매칭 personality : ",JSON.stringify(newFormData.selectedTraits));
      console.log("매칭 animalSelect : ",newFormData.selectedAnimal);

      setIsLoading(true);
      try {
        const res = await axios.post('/api/matching-animals', finalFormData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        setIsLoading(false);

        navigator('/result', {state: res.data});
      } catch (error) {
        console.log('Error submitting form:', error);
        setIsLoading(false);
      }
    }
  };

  if(isLoading) {
    return <Loading/>;
  }

  const CurrentComponent = stages[stage].component;
  
  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '390px'}}>
      <ProgressBar progress={progress}/>
      <Title text={stages[stage].title}/>
      <SubTitle text={stages[stage].subTitle}/>
      <CurrentComponent onNext={handleNext}/>
    </div>
  )
}