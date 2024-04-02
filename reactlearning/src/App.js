
import './App.css';
import User from './User';

function App() {
  const demo = () => {
    alert("message")
  }
  return (
    <div className="App">
      <h1> React Event handler </h1>
      <button onClick={demo}>button</button>
      
    </div>
  );
}

export default App;
