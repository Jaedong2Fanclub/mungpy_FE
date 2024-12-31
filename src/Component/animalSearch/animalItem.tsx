interface dataProps {
  id: number;
  name: string;
  gender: string;
  age : number;
}

const AnimalItem = ({animal} : {animal: any}) => {
  return(
    <div>
      <p>{animal.name}</p>
      <p>{animal.shelter}</p>
      <p>{animal.gender}</p>
      <p>{animal.age}</p>
    </div>
  )
}

export default AnimalItem;