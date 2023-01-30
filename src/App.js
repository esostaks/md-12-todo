import './App.css';
import React, {useState} from 'react';
import Task from './Components/Task';

function App() {
  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState([])

  const addTask = () => {
    setTaskList([...taskList, task])
    setTask('')
  }

  return (
    <div className="section">
      <h1  className='title'>To Do List</h1>
      <input 
        type="text" 
        className='task' 
        onChange={(e) => {
          setTask(e.target.value)

      }}/>
      <button onClick={addTask}>ADD</button>   
      {taskList.map((task) => {
        return <Task task={task}/>
      })}
    </div>
  );
}

export default App;
