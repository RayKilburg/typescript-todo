import React, {FC, useState} from 'react';
import './App.css';

const App: FC = () => {

  const [task, setTask] = useState<string>("")
  const [deadline, setDeadLine] = useState<number>(0)
  const [todo, setTodoList] = useState([])

  const handleChange = () => {

  }

  return (
    <div className="App">
      <div className="header">
          <div className="inputContainer">
            <input type="text" placeholder="Task..." onChange={handleChange}/>
            <input type="number" placeholder="Deadline (in Days)..." onChange={handleChange}/>
          </div>
        <button>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;
