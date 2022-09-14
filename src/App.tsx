import {ChangeEvent, FC, useEffect, useState}from 'react';
import './App.css';
import User from './components/User';

const App:FC = () => {
  
  const getUser = async ()=>{
    const res =await fetch('https://random-data-api.com/api/v2/users?size=1&is_xml=true')
    const data = await res.json()
    return data
  }
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [address, setAddress] = useState('helvetica')
  const nameChanger =(e:ChangeEvent<HTMLInputElement>)=>{
      setName(e.target.value)
  }
  useEffect(  () => {
    getUser()
      .then(data => {
        setName(data.first_name)
        setAge(data.id)  // the api does not support the age so id has been used instead
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
