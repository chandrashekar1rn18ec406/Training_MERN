import './App.css';
import TaskFirst from './Component/TaskFirst';
import TaskSecond from './Component/TaskSecond';
import TaskThree from './Component/TaskThree';

function App() {
  return (
    <div className="App">
      <h1> Using Local Storage</h1>
     <TaskFirst/>
     <hr />  
    <TaskThree/>
    <hr />
    <TaskSecond/>
    </div>
  
  );
}

export default App;
