import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';
import {ITask} from './Interfaces'

const App: FC = () => {

  const [task, setTask] = useState<string>("")
  const [deadline, setDeadLine] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])
  
  // getting data from inputs
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadLine(Number(event.target.value))
    }
  };

  // add task and deadline to list
  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline }; 
    setTodoList([...todoList, newTask])
    setTask("");
    setDeadLine(0);
  }

  return (
    <div className="App">
      <div className="header">
          <div className="inputContainer">
            <input type="text" placeholder="Task..." name="task" value={task} onChange={handleChange}/>
            <input type="number" placeholder="Deadline (in Days)..." name="deadline" value={deadline} onChange={handleChange}/>
          </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;
