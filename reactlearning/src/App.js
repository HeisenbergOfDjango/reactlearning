import './App.css';
import Counter from './Counter';

function App() {

  console.log("---- render ----")

  return (
    <div className="App">
      <h1> React useState with hooks counter</h1>
      <Counter/>
    </div>
  );
}

export default App;
