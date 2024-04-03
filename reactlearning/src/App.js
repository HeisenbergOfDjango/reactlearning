import './App.css';
import UserCard from './UserCard';

function App() {

  console.log("---- render ----")

  return (
    <div className="App">
      <h1> React Props </h1>
      <UserCard name="aditya"/>
    </div>
  );
}

export default App;
