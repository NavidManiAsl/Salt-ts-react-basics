import {ChangeEvent, FC, useEffect, useRef, useState}from 'react';
import './App.css';
import User from './components/User';

const App:FC = () => {
  
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [address, setAddress] = useState('Never land')
  const dataFetchedRef = useRef(false);

  const getUser = async ()=>{
    const res =await fetch('https://random-data-api.com/api/v2/users?size=1&is_xml=true')
    const data = await res.json()
    setName(data.first_name)
    setAge(data.id)  // the api does not support the age so id has been used instead
    setAddress(data.address.state)
 
    
  }
  const nameChanger =(e:ChangeEvent<HTMLInputElement>)=>{
      setName(e.target.value)
  }
  useEffect(  () => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getUser()    
  }, [])
  
  return (
    <div className="App">
     <User  name={name} age={age} address={address} />
      <input placeholder='Name...' value={name} onChange={nameChanger} />
    </div>
  );
}

export default App;
