

import React from 'react'

export default function ToDoElement({key, task, toggleToDo}) {
  
    const {id, tarea, completed} = task;

    function handleCompleted(){

        toggleToDo(id);

    }

    return (
    
        <li
            key={id}
        >
            <input type="checkbox" checked={completed} onChange={handleCompleted}></input>
            {tarea}
        </li>

    );
}
