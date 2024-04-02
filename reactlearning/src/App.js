
import { useState } from 'react';
import './App.css';
import User from './User';

function App() {

  let [data , setData] = useState("initial value")

  const update = () => {
    setData("final value")
  }

  console.log("---- render ----")

  return (
    <div className="App">
      <h1> React useState with hooks</h1>
      <h3>{data}</h3>

      <button onClick={update}>button</button>
      
    </div>
  );
}

export default App;
