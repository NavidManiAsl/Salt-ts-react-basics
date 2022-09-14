import { FC } from 'react'

interface IProps {
  name:string;
  age:number;
  address:string;
}

const User:FC<IProps> = ({name, age ,address})=> {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{address}</p>
    </div>
  )
}

export default User