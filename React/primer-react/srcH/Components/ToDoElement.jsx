

import React from 'react'

export default function ToDoElement({task, toggleToDo}) {
  
    const {id, tarea, completed} = task;

    function handleCompleted(){

        toggleToDo(id);

    }

    return (
    
        <li
            key={id}
            className="list-group-item"
        >
            <input type="checkbox" checked={completed} onChange={handleCompleted}></input>
            {tarea}
        </li>

    );
}
