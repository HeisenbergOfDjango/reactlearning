import './App.css';
import UserCard from './UserCard';

function App() {

  const userData = [
    {name: "aditya", age: 23, email: "a@b.com"},
    {name: "amit", age: 25, email: "a@b2.com"},
    {name: "aayush", age: 24, email: "a@b3.com"},
  ]

  return (
    <div className="App">
      <h1> React Props Example 2 </h1>
      {
        userData.map((user,index) => (
          <UserCard
            key = {index}
            name = {user.name}
            age = {user.age}
            email = {user.email}
          />
        )
      )
      }
    </div>
  );
}

export default App;
