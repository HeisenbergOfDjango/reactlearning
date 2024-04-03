import { useState } from 'react';
import './App.css';
import UserCard from './UserCard';

function App() {

  const [showInitialvalue, hidevalue] = useState(false)

  const [intialValue, finalValue] = useState("")

  const changeHandler = (event) =>{
    console.log(event.target.value)
    finalValue(event.target.value)
  }
 
  return (
    <div className="App">
      <h1> React Input </h1>
      <input type='text' onChange={changeHandler}></input>
      
      <button onClick={()=>hidevalue(true)}>Value</button>
      <h1>{showInitialvalue ? intialValue : ''}</h1>
    </div>
  );
}

export default App;
