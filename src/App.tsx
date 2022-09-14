import {ChangeEventHandler, FC, ReactFragment, useState}from 'react';
import './App.css';
import User from './components/User';

const App:FC = () => {
  
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [address, setAddress] = useState('')
  const nameChanger =(e:React.ChangeEvent<HTMLInputElement>)=>{
      setName(e.target.value)
  }
  return (
    <div className="App">
     <User  name={name} age={age} address={address} />
      <input placeholder='Name...' value={name} onChange={nameChanger} />
    </div>
  );
}

export default App;
