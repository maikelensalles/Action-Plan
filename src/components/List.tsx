import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import './list.css';

export default function CheckboxList() {

  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  
  return (
    <div className="list-container">
        <div className="container">
          <form onSubmit={event => {
            event.preventDefault();
            if (!!value) {
              setTodos([...todos, value]);
              setValue("");
            }
            return;
          }}>
            <TextField label="Tarefa" variant="outlined" type="text"
              value={value}
              onChange={event => setValue(event.target.value)} />
            <button type='submit'>Adicionar</button>
          </form>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        </div>
    </div>
  );
}