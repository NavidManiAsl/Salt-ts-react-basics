import {ChangeEvent, FC, useEffect, useState}from 'react';
import './App.css';
import User from './components/User';
const getUser = async ()=>{
  const data =await fetch('https://random-data-api.com/api/v2/users?size=1&is_xml=true')
  return data.json()
}

const App:FC = () => {
  
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [address, setAddress] = useState('helvetica')
  const nameChanger =(e:ChangeEvent<HTMLInputElement>)=>{
      setName(e.target.value)
  }
  useEffect( () => {
    getUser().then(data => {
      console.log(data)
      setName(data.first_name)
      setAge(data.id)
      setAddress(data.address.state)
    }) 
  }, [])
  
  return (
    <div className="App">
     <User  name={name} age={age} address={address} />
      <input placeholder='Name...' value={name} onChange={nameChanger} />
    </div>
  );
}

export default App;
