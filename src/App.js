import AddTask from './Components/AddTask'
import ListTask from './Components/ListTask'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>My ToDo App..</h1>
      </div>
      <div>
        <h2>Create a new task here!</h2>
      <AddTask/>
      </div>
      <div>
        <h3>Your Saved Tasks</h3>
      <ListTask/>
      </div>
      
    </div>
  );
}

export default App;
