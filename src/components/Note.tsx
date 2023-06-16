import React from 'react';
import { ITask } from "./Interfaces";
import './note.css'

interface Props {
  task: ITask;
  completeTask(taskNameoDelete:string):void;
}

const Note = ({task, completeTask}:Props) => { 
  return (
    <div className="note">
      <span>{task.taskName}</span>
      <button className="xbutton" onClick={()=>{
        completeTask(task.taskName)
      }}>X</button>
    </div>
  )
}

export default Note;