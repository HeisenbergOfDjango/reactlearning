import { useState } from 'react';
import './App.css';
import UserCard from './UserCard';

function App() {

  const [name, setName] = useState("intial name")

  return (
    <div className="App">
      <h1> React Props Example 3 </h1>
      <UserCard name={name}/>
      <button onClick={()=>setName("Final name")} >Update props</button>
    </div>
  );
}

export default App;
