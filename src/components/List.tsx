import React, { ChangeEvent, useState } from 'react';
import TextField from '@mui/material/TextField';
import { ITask } from "./Interfaces";
import './list.css';
import Note from './Note';

export default function CheckboxList() {

  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{
    if(event.target.name === 'task'){
      setTask(event.target.value);
    }
  }

  const addTask = () =>{
    const newTask = {
      taskName:task
    }
    setTodo([...todo, newTask]);
    setTask("");
  }

  const completeTask = (taskNameToDelete: string) => {
    setTodo(todo.filter((task)=>{
      return task.taskName !=taskNameToDelete
    }))
  }

  return (
    <div className="list-container">
        <div className="container">
          <div className="header">
            <div className="inputContainer">
            
            <TextField id="outlined-basic" label="Adicionar tarefa" variant="outlined" type="text" name="task"  value={task}  onChange={handleChange} />
              <button onClick={addTask}>Add</button>
            </div>
            <div className="note">
              {todo.map((task:ITask, key:number)=>{
                return <Note key={key} task={task} completeTask={completeTask} />
              })}
            </div>
          </div>
        </div>
    </div>
  );
}